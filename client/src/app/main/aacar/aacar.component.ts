import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormArray } from "@angular/forms";
import { MainService } from "../main.service";
import { ASSETS } from 'src/app/shared/assets';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aacar',
  templateUrl: './aacar.component.html',
  styleUrls: ['./aacar.component.scss']
})
export class AacarComponent {

  LOADER_IMAGE = ASSETS + "/Loader.svg"
  REGISTRATION_BG_IMG = ASSETS + "/event-list-bg.svg"
  registerForm: FormGroup

  SITE_KEY: string = "6Ld-VYQUAAAAAKb_EMJhaBY1sCFhOz_OZEpMaxrK"
  form_progress = false;
  form_success = false;
  form_error = false;
  form_success_message = "Successfully registered"
  form_error_message = "Please check your information correctly and try again"
  form_show = true;

  constructor(private fb: FormBuilder, private _mainService: MainService, private activeRoute: ActivatedRoute) {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    let numberFormat = '^[0-9]*$';
    this.registerForm = fb.group({
        'name': [null, Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(3)])],
        'university_roll': [null, Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(10), Validators.pattern(numberFormat)])],
        'branch': [null, Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(2)])],
        'year': [null, Validators.compose([Validators.required])],
        'gender': [null, Validators.compose([Validators.required])],
        'phn_no': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(numberFormat)])],
        'email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])],
        'recaptcha': [null, Validators.compose([Validators.required])]
    });

  }



  submitForm() {
    if (this.registerForm.valid) {
      this.form_progress = true;
      this.form_show = false;
      this.form_error = false;
      let values =  this.registerForm.value;
      console.log(values)
      this._mainService.aacar(values).subscribe(
        (success) => {
          this.form_progress = false;
          this.form_success = true;
          setTimeout(() => {
            this.registerForm.reset();
            this.form_success = false;
            this.form_show = true;
          }, 5000);

        }, (err) => {
          console.log(err);
          this.form_error = true;
          this.form_progress = false;
          this.form_show = true;
          this.form_error_message = "Please check your information correctly and try again";
        }
      )
    } else {
      this.form_error = true;
      this.form_error_message = "Don't try to hack you idiot, Tum se na ho paya";
    }
  }

  resolved(captchaResponse: string) {
    this.registerForm.controls['recaptcha'].setValue(captchaResponse)
    console.log(captchaResponse)
  }
}
