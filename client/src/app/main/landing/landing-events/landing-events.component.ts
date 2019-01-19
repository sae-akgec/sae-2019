import { Component, OnInit } from '@angular/core';
import { ASSETS } from 'src/app/shared/assets';
import { MainService } from '../../main.service';


@Component({
  selector: 'app-landing-events',
  templateUrl: './landing-events.component.html',
  styleUrls: ['./landing-events.component.scss']
})
export class LandingEventsComponent implements OnInit {
  EVENTSIMAGE = ASSETS + "/placeholder.svg";
  events:any[]
  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.mainService.getEvents().subscribe(
      (events)=>{
        this.events = events['results']
      }
    )
  }

}
