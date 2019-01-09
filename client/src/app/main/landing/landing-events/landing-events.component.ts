import { Component, OnInit } from '@angular/core';
import { ASSETS } from 'src/app/shared/assets';

@Component({
  selector: 'app-landing-events',
  templateUrl: './landing-events.component.html',
  styleUrls: ['./landing-events.component.css']
})
export class LandingEventsComponent implements OnInit {
  EVENTSIMAGE = ASSETS + "/placeholder.svg";

  constructor() { }

  ngOnInit() {
  }

}
