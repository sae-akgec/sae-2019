import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { MainService } from '../main.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  button:any;
  submissionButton = true;

  constructor(private fb: FormBuilder, private _mainService:MainService) {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    this.contactForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])],
      'subject': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'description': [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.button = document.getElementById("contactButton");
  }

  submitContact(){
    if(this.contactForm.valid){
      this.submissionButton = false;
      this._mainService.createContact(this.contactForm.value).subscribe(
        (msg) =>{
          this.contactForm.reset();
          this.button.click();
          this.submissionButton = true;
        }, (err) =>{
          this.submissionButton = true;
          console.log(err);
        })
    }
  }

}
