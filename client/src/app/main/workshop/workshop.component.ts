import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  workshop: any;
  slug: any;
  constructor(private mainService: MainService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.slug = params['id']
        this.mainService.getWorkshop(params['id']).subscribe(
          (workshop) => {
            this.workshop = workshop;
          }, (err) => {
            console.log(err);
          });
      }
    });
  }

}
