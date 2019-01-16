import { Component, OnInit } from '@angular/core';
import { LandingTService } from './landing-t.service';

@Component({
  selector: 'app-landing-testimonials',
  templateUrl: './landing-testimonials.component.html',
  styleUrls: ['./landing-testimonials.component.scss']
})
export class LandingTestimonialsComponent implements OnInit {

  constructor(private tService:LandingTService) { }

  ngOnInit() {
    this.tService.headerThree(document.getElementById('canvas'))
  }

}
