import { Component, OnInit } from '@angular/core';
import { Innovacion } from '../shared/innovacion';
import { Photos } from '../shared/innovacion';
import { Videos } from '../shared/innovacion'

@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html',
  styleUrls: ['./innovacion.component.scss']
})
export class InnovacionComponent implements OnInit {
  plans:any;
  
  constructor() { }


  ngOnInit() {
    this.plans = [
      {planPrice: "2500",  teamMember: "5"},
      {planPrice: "2400",  teamMember: "4"},
      {planPrice: "2400",  teamMember: "3"},
      {planPrice: "2200",  teamMember: "2"},
      {planPrice: "2000",  teamMember: "1"}    
    ];
  }

}
