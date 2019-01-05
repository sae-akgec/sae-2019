import { Component, OnInit } from "@angular/core";
import { IMAGE_CONTACT } from "../../shared/assets";
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { MainService } from "../services/main.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})

export class ContactComponent implements OnInit {

  contact_img = IMAGE_CONTACT
  contactForm: FormGroup
  email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  constructor(private fb:FormBuilder, private mainService:MainService) { 
    this.contactForm = fb.group({
      'full_name' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'email':[null, Validators.compose([Validators.required, Validators.pattern (this.email_pattern)])],
      'phone_number': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'subject': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {

  }

  contact(){
    let contactModal = document.getElementById("modalButton")
    this.mainService.contactUs(this.contactForm.value).subscribe((res)=>{
      this.reset()
      contactModal.click()
    },(err)=>{
    })
  }
  reset() {
    for (let name in this.contactForm.controls) {
      this.contactForm.controls[name].setValue(null)
        this.contactForm.controls[name].setErrors(null);
    }
}
}
