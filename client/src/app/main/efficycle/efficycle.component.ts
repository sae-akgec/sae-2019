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
      images: '/assets/images/14.jpeg'

    },
    {
      id: '1',
      images: '/assets/images/15.jpeg'

    },
    {
      id: '2',
      images: '/assets/images/19.jpeg'

    },
    {
      id: '3',
      images: '/assets/images/17.jpeg'

    },
    {
      id: '4',
      images: '/assets/images/18.jpeg'

    },
    {
      id: '5',
      images: '/assets/images/19.jpeg'

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}








