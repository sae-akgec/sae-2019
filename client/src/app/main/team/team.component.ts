import { Component, OnInit } from '@angular/core';
import { MainService } from '../man.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members: any[]

  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.mainService.getTeam().subscribe(
      (members) =>{
        this.members = members["results"];
      },(err) =>{
        console.log(err);
      }
    )
  }

}
