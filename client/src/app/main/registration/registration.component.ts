import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,FormControl, AbstractControl } from '@angular/forms';
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
  teamMembers: Array<String> = ['1' ,'2', '3' , '4', '5']
  workshops: Array<String> = ['Innovacion-2020' , 'Aacar-6.0' ]
  branches:Array<String> = ['Computer Science and Engineering',
                            'Information Tecnology and Engineering',
                            'Electronics and Communication Engineering',
                            'Mechanical Engineering',
                            'Civil Engineering',
                            'Electronics and Instrumentation Engineerings',
                            ]
  colleges:Array<String> = ['Ajay Kumar Garg Engineering College' ]        

  nestedForm:FormGroup;
  submission=true;
  button:any;
  constructor(private _fb: FormBuilder, private _mainService:MainService) { }

  ngOnInit() {
    this.button = document.getElementById("submitbutton");
    this.nestedForm = this._fb.group({
      TeamName:[null,[Validators.required, Validators.minLength(2)]],
      Email:[null,this.validate],
      SelectWorkshop:[null,Validators.required],
      //
      members:this._fb.array([this.addmembersgroup()])
  });

  }
  addmembersgroup(){
    return this._fb.group({
      Name:[null,[Validators.required, Validators.minLength(2)]], 
      Email:[null,this.validate],
      Branch:[null,Validators.required],
      CollegeName:[null,Validators.required],
      PhoneNumber:[null,[Validators.required,Validators.pattern('^[0-9]{10}')]],
      StudentNumber:[null,Validators.required]  
    })

  }
  
  validate(control: AbstractControl) {
    const elementValue = control.value;

    if (elementValue === null || elementValue === undefined || elementValue === '') {
      return {'cus_required' : 'Field is required'};
    }

    const reg = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
    if (!reg.test(elementValue)) {
      return {'cus_pattern' : 'Value should be 5 digit number.'};
    }

    return null;
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

