import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit , AfterViewInit{
  
  team_array:FormArray;
  totalAmount :any
  nestedForm:FormGroup;
  plans = [];
  submissionButton = true;

  teamMembers:any[] = [];
   currentWorkshops:Array<String>= [
    'Innovacion'
  ]
  branches:Array<String> = ['Computer Science and Engineering',
                            'Information Tecnology and Engineering',
                            'Electrical and Electronics Engineering',
                            'Electronics and Communication Engineering',
                            'Mechanical Engineering',
                            'Civil Engineering',
                            'Electronics and Instrumentation Engineerings',
                            ]
  colleges:Array<String> = ['Ajay Kumar Garg Engineering College' ] 
  memberLimit:number;  
  finalAmount:any     
  submission=true;
  button:any;
  modal:any;
  email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  phone_pattern = /^[0-9]{10}/                          
  constructor(private _fb: FormBuilder, private userService:UsersService) {
    this.nestedForm = this._fb.group({
      'TeamName' : [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      'SelectWorkshop': [null,Validators.required],
       Email:[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])],
      'plan': [null,Validators.required],
      'team_array':this._fb.array([this.addmembersgroup()])
    })
    this.team_array = this.nestedForm.get('team_array') as FormArray
   }

  ngOnInit() {
  
    this.plans = [
      {planPrice: "2500",  teamMember: "5"},
      {planPrice: "2400",  teamMember: "4"},
      {planPrice: "2400",  teamMember: "3"},
      {planPrice: "2200",  teamMember: "2"}, 
      {planPrice: "2000",  teamMember: "1"}  
    ];
    console.log(this.plans)
    this.button = document.getElementById("submitbutton");
     }
  ngAfterViewInit() {
    this.nestedForm.controls['plan'].valueChanges.subscribe((value) => {
      
      this.clearFormArray(this.team_array)
          if (this.plan.value == value) {
              this.memberLimit = value
              console.log(this.memberLimit)
              this.amount(this.memberLimit)
              for (let i = 1; i < this.memberLimit; i++) {
              this.addMembers()
      }
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
      StudentNumber:[null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(8)])],  
    })

  }
  get plan(){
    return this.nestedForm.get('plan')
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
  
    amount(memberLimit){
    if(memberLimit == 1 ){
      this.totalAmount=2000 
    }
    else if(memberLimit == 2){
      this.totalAmount = 2200
    }
    else if(memberLimit == 3){
      this.totalAmount=2400
    }
    else if(memberLimit == 4){
      this.totalAmount=2400
      }
    else {
      this.totalAmount = 2500
      }
      return 0
  }
  addMembers() : void{
    this. teamarrayArray.push(this.addmembersgroup());
  }
  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 1) {
        formArray.removeAt(0)
    }
}
  
  // removeMembers(index){
  //   this. teamarrayArray.removeAt(index)
  // }
  //submitting Team Registration
  submitHandler(){
    if(this.nestedForm.valid){
      this.submissionButton = false;
      this.userService.createTeamRegistration(this.nestedForm.value).subscribe(
        (msg) =>{
         console.log(this.nestedForm.value)
          this.nestedForm.reset();
          this.button.click();
          this.submissionButton = true;
        }, (err) =>{
          this.submissionButton = true;
          console.log(err);
        })
    }
  }
 
}
