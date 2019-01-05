import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormArray } from "@angular/forms";
import { IMAGE_404 } from "../../shared/assets";
@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent implements OnInit, AfterViewInit {

    registerForm: FormGroup
    err: String;
    currentWorkshops: any[] = []
    currentPlans: any[] = []
    teamLimit: number
    err_404 = IMAGE_404
    team_members: FormArray
    paymentLink:any
    email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            'team_id': [null, Validators.required],
            'workshop': [null, Validators.required],
            'plan': [null, Validators.required],
            'team_members': this.fb.array([this.createItem()])
        })
        this.team_members = this.registerForm.get('team_members') as FormArray
    }

    ngOnInit() {
        this.turnOffSpinner()
        this.turnOffSuccess()
        this.clearFormArray(this.team_members)
        // this.userService.getCurrentWorkshops().subscribe((workshops) => {
        //     this.currentWorkshops = workshops['workshops']
        //     console.log(workshops)
        // }, (err) => {
        //     console.log(err)
        // })
    }
    ngAfterViewInit() {
        this.registerForm.controls['workshop'].valueChanges.subscribe((value) => {
            this.currentPlans = []
            this.clearFormArray(this.team_members)
            let workshops = this.currentWorkshops.filter(workshop => {
                if (workshop['id'] == value) {
                    this.currentPlans = workshop['plans']
                    return (true)
                }
            })

        });
        this.registerForm.controls['plan'].valueChanges.subscribe((value) => {
            this.clearFormArray(this.team_members)
            let plans = this.currentPlans.filter(plan => {
                if (plan['id'] == value) {
                    this.teamLimit = plan['team_limit']
                    return (true)
                }
            })
            for (let i = 1; i < this.teamLimit; i++) {
                this.addItem() 
            }

        });
    }
    // Forms array createItem create new item, add item to form, clear fom values
    createItem(): FormGroup {
        return this.fb.group({
            'email': [null, Validators.compose([
                Validators.required, Validators.pattern (this.email_pattern)
              ])],
            'user_contact': [null, Validators.required],
            'user_college': ['Ajay Kumar Garg Engineering College', Validators.required],
            'is_user_local': [true, Validators.required],
            'ref_code': [null],
            'user_branch':['EN'],
            'user_year':[1],
        });
    }
    addItem(): void {
        this.team_members.push(this.createItem());
    }
    clearFormArray = (formArray: FormArray) => {
        while (formArray.length !== 1) {
            formArray.removeAt(0)
        }
    }

    //register form
    register(){
        this.turnOnSpinner()
        // this.userService.postEnrollment(this.registerForm.value).subscribe((link)=>{
        //     this.turnOffSpinner()
        //     this.turnOnSuccess()
        //     this.paymentLink = link["link"]
        // },(err)=>{
        //     this.turnOffSpinner()
        //     console.log(err)
        //     if(err.error['error']){
        //         this.err = err.error['error']
        //     }
        //     else if(err.error['detail']){
        //         this.err = "Please ensure all members are registred on sae-akgec"
        //     }
        //     else{
        //         this.err = "Please ensure information is correctly provided and try again"
        //     }
        // })
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
