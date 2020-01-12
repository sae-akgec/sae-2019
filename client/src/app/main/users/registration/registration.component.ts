import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  fruits: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  teamMembers:any[] = []
  currentWorkshops: any[] = []
  branches:Array<String> = ['Computer Science and Engineering',
                            'Information Tecnology and Engineering',
                            'Electronics and Communication Engineering',
                            'Mechanical Engineering',
                            'Civil Engineering',
                            'Electronics and Instrumentation Engineerings',
                            ]
  colleges:Array<String> = ['Ajay Kumar Garg Engineering College' ] 
  memberLimit:number;       
  team_array:FormArray;
  nestedForm:FormGroup;
  submission=true;
  button:any;
  email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  phone_pattern = /^[0-9]{10}/                          
  constructor(private _fb: FormBuilder, private userService:UsersService) {
    this.nestedForm = this._fb.group({
      'TeamName' : [null,Validators.required],
      'SelectWorkshop': [null,Validators.required],
      'leaderEmail':[null,Validators.required],
      'plan': [null,Validators.required],
      'team_array':this._fb.array([this.addmembersgroup()])
    })
    this.team_array = this.nestedForm.get('team_array') as FormArray
   }

  ngOnInit() {
    this.clearFormArray(this.team_array)
        this.userService.getCurrentWorkshops().subscribe((workshops) => {
            this.currentWorkshops = workshops['workshops']
            console.log(workshops)
        }, (err) => {
            console.log(err)
        })
    this.button = document.getElementById("submitbutton");
    this.nestedForm = this._fb.group({
      TeamName:[null,[Validators.required, Validators.minLength(2)]],
      Email:[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])],
      SelectWorkshop:[null,Validators.required],
      plan :[null,Validators.required],
      team_array:this._fb.array([this.addmembersgroup()])
  });

  }
  ngAfterViewInit() {
    this.nestedForm.controls['SelectWorkshop'].valueChanges.subscribe((value) => {
        this.teamMembers= []
        this.clearFormArray(this.team_array)
        let workshops = this.currentWorkshops.filter(workshop => {
            if (workshop['id'] == value) {
                this.teamMembers = workshop['plans']
                return (true)
            }
        })
    });
    this.nestedForm.controls['plan'].valueChanges.subscribe((value) => {
        this.clearFormArray(this.team_array)
        let plans = this.teamMembers.filter(plan => {
            if (plan['id'] == value) {
                this.memberLimit = plan['team_limit']
                return (true)
            }
        })
        for (let i = 1; i < this.memberLimit; i++) {
            this.addmembersgroup() 
        }

    });
}

  addmembersgroup(){
    return this._fb.group({
      Name:[null,[Validators.required, Validators.minLength(2)]], 
      Email:[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])],
      Branch:[null,Validators.required],
      CollegeName:[null,Validators.required],
      PhoneNumber:[null, Validators.compose([
        Validators.required, Validators.pattern (this.phone_pattern)
      ])],
      StudentNumber:[null,Validators.required]  
    })

  }
  get TeamName(){
    return this.nestedForm.get('TeamName');
  }
  get SelectWorkshop(){
    return this.nestedForm.get('SelectWorkshop')
  }
  get Email(){
    return this.nestedForm.get('Email')
  }
  get  teamarrayArray(){
    return <FormArray>this.nestedForm.get('team_array');
  }
  addMembers(){
    this. teamarrayArray.push(this.addmembersgroup());
  }
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 1) {
        formArray.removeAt(0)
    }
}
  
  removeMembers(index){
    this. teamarrayArray.removeAt(index)
  }
  //submitting Team Registration
  submitHandler(){
    console.log(this.nestedForm.value)
    if(this.nestedForm.valid){
      this.submission = false;
      this.userService.createTeamRegistration(this.nestedForm.value).subscribe(
        (msg) =>{
          this.nestedForm.reset();
          this.button.click();
          this.submission = true;
        }, (err) =>{
          this.submission= true;
          console.log(err);
        })
    }
  }
}

