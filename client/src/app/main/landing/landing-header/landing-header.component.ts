import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { ASSETS } from 'src/app/shared/assets';


@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  HEADER_BACKGOUND = ASSETS + '/landing-header.jpg';
  constructor(private tService:LandingService) { }

  ngOnInit() {
    this.tService.headerThree(document.getElementById('canvas'))
  }


}
