import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormArray } from "@angular/forms";
import { MainService } from "../main.service";
import { ASSETS } from 'src/app/shared/assets';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regsiter',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  LOADER_IMAGE = ASSETS + "/Loader.svg"
  REGISTRATION_BG_IMG = ASSETS + "/event-list-bg.svg"
  registerForm: FormGroup
  particpantsForm: FormGroup
  recaptchaForm: FormGroup
  plans: any[]
  max_participants: number
  total_participants: number
  participants: any[]
  SITE_KEY: string = "6Ld-VYQUAAAAAKb_EMJhaBY1sCFhOz_OZEpMaxrK"
  form_progress = false;
  form_success = false;
  form_error = false;
  form_success_message = "Successfully registered"
  form_error_message = "Please check your information correctly and try again"
  form_show = true;
  slug:any;
  workshop:any;
  is_team_local: boolean = false;

  constructor(private fb: FormBuilder, private _mainService: MainService, private activeRoute: ActivatedRoute) {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    let numberFormat = '^[0-9]*$';
    this.registerForm = fb.group({
      'college_name': [null, Validators.compose([Validators.required, Validators.maxLength(130), Validators.minLength(3)])],
      'team_name': [null, Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(3)])],
      'ref_code': [null],
      'is_team_local': [true, Validators.compose([Validators.required])],
      'workshop': [],
      'leader_email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])],
      'plan': [null, Validators.compose([Validators.required])]
    });

    this.particpantsForm = fb.group({
      'participants': this.fb.array([])
    })

    this.recaptchaForm = fb.group({
      'recaptcha': [null, Validators.compose([Validators.required])]
    })

  }

  createItem(): FormGroup {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    let numberFormat = '^[0-9]*$';
    return this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(3)])],
      'university_roll': [null, Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(10), Validators.pattern(numberFormat)])],
      'branch': [null, Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(2)])],
      'year': [null, Validators.compose([Validators.required])],
      'gender': [null, Validators.compose([Validators.required])],
      'phn_no': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(numberFormat)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])]
    });
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.slug = params['id']
        this._mainService.getWorkshop(params['id']).subscribe(
          (workshop) => {
            this.workshop = workshop;
            this.plans = workshop['plans']
            this.registerForm.controls['workshop'].setValue(this.workshop['id'])
          }, (err) => {
            console.log(err);
          });
      }
    });
  }

  ngAfterViewInit(): void {
    this.registerForm.controls['is_team_local'].valueChanges.subscribe(
      value =>{
        if(this.registerForm.controls['is_team_local'].value){
          this.is_team_local = true;
        }else{
          this.is_team_local = false;
        }
      }
    )
    this.registerForm.controls['plan'].valueChanges.subscribe(value => {
      this.max_participants = parseInt(this.getEvent(value));
      this.resetParticipants()
      this.addParticipants(this.max_participants);
    })
  }

  getEvent(id: string) {
    let maxp
    this.plans.forEach(plan => {
      if (parseInt(plan['id']) == parseInt(id)) {
        maxp = plan['team_limit'];
      }
    });
    return maxp
  }

  addParticipants(maxp: number): void {
    let control = <FormArray>this.particpantsForm.controls['participants']
    for (let i = control.length; i < maxp; i++) {
      control.push(this.createItem())
    }
  }

  resetParticipants(): void {
    let control = <FormArray>this.particpantsForm.controls['participants']
    while (0 != control.length) {
      control.removeAt(0);
    }
  }

  submitForm() {
    if (this.registerForm.valid && this.particpantsForm.valid && this.recaptchaForm.valid) {
      this.form_progress = true;
      this.form_show = false;
      this.form_error = false;
      let values = Object.assign({}, this.registerForm.value, this.particpantsForm.value, this.recaptchaForm.value);
      console.log(values)
      this._mainService.regsiter(values).subscribe(
        (success) => {
          this.form_progress = false;
          this.form_success = true;
          setTimeout(() => {
            this.registerForm.reset();
            this.resetParticipants();
            this.particpantsForm.reset();
            this.recaptchaForm.reset();
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
    this.recaptchaForm.controls['recaptcha'].setValue(captchaResponse)
    console.log(captchaResponse)
  }

  getControls() {
    return <FormArray>this.particpantsForm.get('participants');
  }
}
