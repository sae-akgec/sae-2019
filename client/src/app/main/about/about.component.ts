import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  registerForm: FormGroup;
  button:any;
  submissionButton = true;

  constructor(private fb: FormBuilder, private _mainService:MainService) {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    this.registerForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      'studentNo': [null, Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(7)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])],
      'skills': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'branch': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'domain': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'usp': [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.button = document.getElementById("contactButton");
  }
  

  submitRegister(){
    if(this.registerForm.valid){
      this.submissionButton = false;
      this._mainService.createRegister(this.registerForm.value).subscribe(
        (msg) =>{
          this.registerForm.reset();
          this.button.click();
          this.submissionButton = true;
        }, (err) =>{
          this.submissionButton = true;
          console.log(err);
        })
    }
  }

}
