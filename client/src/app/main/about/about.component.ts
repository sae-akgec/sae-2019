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
  button: any;
  submissionButton = true;

  constructor(private fb: FormBuilder, private _mainService: MainService) {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    this.registerForm = fb.group({
      'universityNumber': [null, Validators.compose([Validators.required, Validators.maxLength(14), Validators.minLength(5)])],
      'studentNo': [null, Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(5)])],
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(9)])],
      'branch': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'studies': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])],
      'proName1': [null],
      'proName2': [null],
      'year1': [null],
      'year2': [null],

      // 'skills': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      // 'gender': [null, Validators.compose([Validators.required , Validators.minLength(2)])]
      // 'domain': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      // 'usp': [null, Validators.compose([Validators.required])]
    });
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.registerForm.patchValue({
        fileSource:file
      })
    }
  }
  ngOnInit() {
    this.button = document.getElementById("contactButton");
  }


  submitRegister() {
    if (this.registerForm.valid) {
      this.submissionButton = false;
      console.log(this.registerForm.value)
      this._mainService.createRegister(this.registerForm.value).subscribe(
        (msg) => {
          this.registerForm.reset();
          this.button.click();
          this.submissionButton = true;
        }, (err) => {
          this.submissionButton = true;
          console.log(err);
        })
    }
  }

}
