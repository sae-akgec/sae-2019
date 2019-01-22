import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { ASSETS } from 'src/app/shared/assets';

@Component({
  selector: 'app-landing-workshops',
  templateUrl: './landing-workshops.component.html',
  styleUrls: ['./landing-workshops.component.scss']
})
export class LandingWorkshopsComponent implements OnInit {

  workshops:any;
  ABOUT_IMAGE = ASSETS + "/landing_about.svg"
  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.mainService.getWorkshops().subscribe(
      (workshops)=>{
        this.workshops = workshops['results']
      }, 
      (err)=>{
        console.log(err)
      }
    )
  }

}
