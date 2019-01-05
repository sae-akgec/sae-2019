import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";
import { IMAGE_HEADER, IMAGE_ABOUT, IMAGE_LATEST } from "../../shared/assets";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})

export class MainComponent implements AfterViewInit {
  header_img = IMAGE_HEADER
  about_img = IMAGE_ABOUT
  news_img = IMAGE_LATEST
  events
  workshops
  constructor(private __mainService:MainService, private router:Router) { 

  }

  ngAfterViewInit() {
    this.__mainService.getEvents().subscribe((events)=>{
      this.events = events['events'];
    })
    this.__mainService.getWorkshops().subscribe((workshops)=>{
      this.workshops = workshops['workshops']
    })
  }
  workshopRouter(name){
    this.router.navigate(['workshop',name])
  }
  eventRouter(id:Number){
    this.router.navigate(['event',id])
  }

}
