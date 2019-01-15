import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit() {
  }

}
