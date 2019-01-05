import { Component, OnInit } from "@angular/core";
import { MainService } from "../services/main.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})

export class TeamComponent implements OnInit {
  members
  constructor(private __mainService:MainService) { 

  }

  ngOnInit() {
    this.__mainService.getMembers().subscribe((members)=>{
      this.members = members['members']
    })
  }
}
