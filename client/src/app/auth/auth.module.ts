import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ResetPasswordComponent, ForgotPasswordComponent, AuthComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
