import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.scss']
})
export class EventTimelineComponent implements OnInit {

  @Input() eventMsg;

  constructor() { }

  ngOnInit() {
  }

}
