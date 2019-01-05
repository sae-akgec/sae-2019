import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormGroup,FormControl, FormBuilder, Validators,ReactiveFormsModule} from "@angular/forms";
import { AuthGaurd } from "../auth-gaurd.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})

export class SignupComponent implements OnInit {
  msg:any;
  registerForm:FormGroup;
  err:any;
  email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private _authService:AuthService, private router:Router, private fb:FormBuilder, private _authGaurd:AuthGaurd) {
    this.registerForm = fb.group({
      'first_name':[null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'last_name':[null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'username':[null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'password':[null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'email':[null, Validators.compose([
        Validators.required, Validators.pattern (this.email_pattern)
      ])]
    })  

  }

  ngOnInit() {
    this.turnOffSpinner()
    this.turnOffSuccess()
    if(this._authGaurd.isLoggedIn){
      this.router.navigateByUrl('')
    }
  }
  signup(){
    this.turnOnSpinner()
    this._authService.registerUser(this.registerForm.value).subscribe((response)=>{
      this.turnOffSpinner()
      this.turnOnSuccess()
    },(err)=>{
      this.turnOffSpinner()
      let username_err = err.error['username'];
      let email_err = err.error['email'];
      let password_err = err.error['password']
      if(username_err){
        this.err = username_err[0]
      }
      else if(email_err){
        this.err = email_err
      }
      else if(password_err){
        this.err = password_err
      }
      else{
        this.err = "Failed to register"
      }
    })
  }

  turnOffSpinner(){
    document.getElementById("form").style.display = "block";
    document.getElementById("spinner").style.display = "none";
  }
  turnOnSpinner(){
    document.getElementById("form").style.display = "none";
    document.getElementById("spinner").style.display = "block";
  }
  turnOffSuccess(){
    document.getElementById("form").style.display = "block";
    document.getElementById("verifyEmailAlert").style.display = "none";
  }
  turnOnSuccess(){
    document.getElementById("form").style.display = "none";
    document.getElementById("verifyEmailAlert").style.display = "block";
  }
}
