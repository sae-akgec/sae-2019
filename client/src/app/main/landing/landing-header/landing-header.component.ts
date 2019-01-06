import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.css']
})
export class LandingHeaderComponent implements OnInit {

  constructor(private _landingService:LandingService) { }

  ngOnInit() {
    var elm = document.getElementById('world');
    this._landingService.headerThree(elm);
  }

}
