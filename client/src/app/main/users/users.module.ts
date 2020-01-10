import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { ClassComponent } from './class/class.component';
import{RegistrationComponent} from './registration/registration.component'
//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaymentComponent, ClassComponent,RegistrationComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class UsersModule { }
