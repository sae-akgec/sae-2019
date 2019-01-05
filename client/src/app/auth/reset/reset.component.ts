import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, AbstractControl } from "@angular/forms";
import { matchOtherValidator } from "./validator";


@Component({
  selector: "app-reset-admin",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"]
})

export class ResetComponent implements OnInit {
  alertMsg: String = "";
  token: String;
  uid: String;
  resetForm: FormGroup
  iserr: boolean = false;
  constructor(private _authService: AuthService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    route.queryParams.subscribe((params) => {
      this.token = params['t']
      this.uid = params['u']
      if (!this.uid || !this.token) {
        this.router.navigate([''])
      }
    })
  }
  ngOnInit() {
    this.resetForm = this.fb.group({
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'token': [this.token],
      'uid': [this.uid],
      'confirm_password': [null, [Validators.required, matchOtherValidator('password')]]
    })
  }
  verifyAlert() {
    this.hideVerifyBody();
    var elemIcon = document.getElementById("verifyEmailAlertIcon");
    elemIcon.className = "verify-alert-icon";
    var elemMsg = document.getElementById("verifyEmailAlertMsg");
    elemMsg.className = "verify-alert-message";
    var elem2 = document.getElementById("verifyEmailAlert");
    elem2.className = "text-center display";
  }


  errorAlert() {
    this.hideVerifyBody();
    var elemIcon = document.getElementById("verifyEmailAlertIcon");
    elemIcon.className = "verify-alert-error-icon";
    var elemMsg = document.getElementById("verifyEmailAlertMsg");
    elemMsg.className = "verify-alert-error-message";
    var elem2 = document.getElementById("verifyEmailAlert");
    elem2.className = "text-center display";
  }

  showSpinner() {
    let elem = document.getElementById("spinner")
    elem.className = "text-center spinner";
  }

  hideSpinner() {
    let elem = document.getElementById("spinner")
    elem.className = "text-center spinner hide";
  }

  showVerifyBody() {
    var elem1 = document.getElementById("resetPasswordBody");
    elem1.className = "panel-body text-center display";
  }

  hideVerifyBody() {
    var elem1 = document.getElementById("resetPasswordBody");
    elem1.className = "panel-body text-center hide";
  }

  reset() {
    this.hideVerifyBody();
    this.showSpinner();
    this._authService.resetPassword(this.resetForm.value).subscribe(() => {
      this.iserr = false
      this.alertMsg = "Changed your Password sucessfully now you can signin with new password";
      this.hideSpinner();
      this.verifyAlert();
    }, (err) => {
      this.iserr = true;
      this.alertMsg = err.error['err'];
      this.hideSpinner();
      this.errorAlert();
    }
    )
  }
}
