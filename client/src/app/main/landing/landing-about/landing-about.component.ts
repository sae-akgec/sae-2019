import { Component, OnInit } from '@angular/core';
import { ASSETS } from 'src/app/shared/assets';

@Component({
  selector: 'app-landing-about',
  templateUrl: './landing-about.component.html',
  styleUrls: ['./landing-about.component.scss']
})
export class LandingAboutComponent implements OnInit {

  ABOUT_BACKGOUND = ASSETS + "/landing_about.svg";
  ABOUT_IMAGE = ASSETS + "/about.svg"
  constructor() { }

  ngOnInit() {
  }

}
