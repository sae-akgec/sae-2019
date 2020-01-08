import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import { MainService } from '../main.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  states: Array<String> = ['AR', 'AL', 'CA', 'DC'];
  fruits: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  teamMembers: Array<String> = ['1','2','3','4','5']
  workshops: Array<String> = ['Innovacion-2020' , 'Aacar-6.0' ]
  branches:Array<String> = ['Computer Science and Engineering',
                            'Information Tecnology and Engineering',
                            'Electronics and Communication Engineering',
                            'Mechanical Engineering',
                            'Civil Engineering',
                            'Electronics and Instrumentation Engineerings',
                            ]
  colleges:Array<String> = ['Ajay Kumar Garg Engineering College' ]        
  
  members:FormArray;
  nestedForm:FormGroup;
  submission=true;
  button:any;
  email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  phone_pattern = /^[0-9]{10}/                          
  constructor(private _fb: FormBuilder, private _mainService:MainService) {
    this.nestedForm = this._fb.group({
      'TeamName' : [null,Validators.required],
      'SelectWorkshop': [null,Validators.required],
      'leaderEmail':[null,Validators.required],
      'members':this._fb.array([this.addmembersgroup()])
    })
    this.members = this.nestedForm.get('members') as FormArray
   }
  
  ngOnInit() {
    this.button = document.getElementById("submitbutton");
    this.nestedForm = this._fb.group({
      TeamName:[null,[Validators.required, Validators.minLength(2)]],
      leaderEmail:[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])],
      Email:[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])],
      SelectWorkshop:[null,Validators.required],
      //
      members:this._fb.array([this.addmembersgroup()])
  });

  }
  addmembersgroup(){
    return this._fb.group({
     'Name':[null,[Validators.required, Validators.minLength(2)]], 
     'Email':[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])],
     'Branch':[null,Validators.required],
     'CollegeName':[null,Validators.required],
      'PhoneNumber':[null, Validators.compose([
        Validators.required, Validators.pattern (this.phone_pattern)
      ])],
      'StudentNumber':[null,Validators.required]  
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
  get membersArray(){
    return <FormArray>this.nestedForm.get('members');
  }
  addMembers(){
    this.membersArray.push(this.addmembersgroup());
  }
  
  removeMembers(index){
    this.membersArray.removeAt(index)
  }
  //submitting Team Registration
  submitHandler(){
    console.log(this.nestedForm.value)
    if(this.nestedForm.valid){
      this.submission = false;
      this._mainService.createTeamRegistration(this.nestedForm.value).subscribe(
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

