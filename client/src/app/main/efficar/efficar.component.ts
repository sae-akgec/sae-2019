import { Component, OnInit } from '@angular/core';
import { Ebike } from '../shared/e-bike'
@Component({
  selector: 'app-efficar',
  templateUrl: './efficar.component.html',
  styleUrls: ['./efficar.component.scss']
})
export class EfficarComponent implements OnInit {
  ebikes: Ebike[] = [
    {
      id: '0',
      images: '/assets/images/8.jpg'

    },
    {
      id: '1',
      images: '/assets/images/9.jpg'

    },
    {
      id: '2',
      images: '/assets/images/10.jpg'

    },
    {
      id: '3',
      images: '/assets/images/8.jpg'

    },
    {
      id: '4',
      images: '/assets/images/131.jpg'

    },
    {
      id: '5',
      images: '/assets/images/11.jpg'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
