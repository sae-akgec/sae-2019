import { Component, OnInit } from '@angular/core';
import { Innovacion } from '../shared/innovacion'
@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html',
  styleUrls: ['./innovacion.component.scss']
})
export class InnovacionComponent implements OnInit {
  innovacions: Innovacion[] = [
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

    },
    {
      id: '6',
      images: '/assets/images/14.jpg'

    },
    {
      id: '7',
      images: '/assets/images/15.jpg'

    },
    {
      id: '8',
      images: '/assets/images/16.jpg'

    },
    {
      id: '9',
      images: '/assets/images/17.jpg'

    },
    {
      id: '10',
      images: '/assets/images/18.jpg'

    },
    {
      id: '11',
      images: '/assets/images/19.jpg'

    },
    {
      id: '12',
      images: '/assets/images/14.jpg'

    }
  ];
  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;

  constructor() { }

  ngOnInit() {
  }

}
