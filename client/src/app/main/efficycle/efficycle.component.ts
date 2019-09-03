import { Component, OnInit } from '@angular/core';
import { Efficycle } from '../shared/efficycle'
@Component({
  selector: 'app-efficycle',
  templateUrl: './efficycle.component.html',
  styleUrls: ['./efficycle.component.scss']
})
export class EfficycleComponent implements OnInit {
  efficycles: Efficycle[] = [
    {
      id: '0',
      images: '/assets/images/14.jpg'

    },
    {
      id: '1',
      images: '/assets/images/15.jpg'

    },
    {
      id: '2',
      images: '/assets/images/16.jpg'

    },
    {
      id: '3',
      images: '/assets/images/17.jpg'

    },
    {
      id: '4',
      images: '/assets/images/18.jpg'

    },
    {
      id: '5',
      images: '/assets/images/19.jpg'

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
