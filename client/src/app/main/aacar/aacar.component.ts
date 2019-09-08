import { Component, OnInit } from '@angular/core';
import { Aacar } from '../shared/aacar'
import { Photos } from '../shared/aacar';
@Component({
  selector: 'app-aacar',
  templateUrl: './aacar.component.html',
  styleUrls: ['./aacar.component.scss']
})
export class AacarComponent implements OnInit {
  aacars: Aacar[] = [
    {
      id: '0',
      images: '/assets/aacar/0.jpg'

    },
    {
      id: '1',
      images: '/assets/aacar/1.jpg'

    },
    {
      id: '2',
      images: '/assets/aacar/2.jpg'

    },
    {
      id: '3',
      images: '/assets/aacar/3.jpg'

    },

  ];
  photos: Photos[] = [
    {
      id: '0',
      images: '/assets/aacar/4.jpeg'
    },
    {
      id: '1',
      images: '/assets/aacar/5.jpeg'
    },
    {
      id: '2',
      images: '/assets/aacar/6.jpeg'
    },
    {
      id: '3',
      images: '/assets/aacar/7.jpeg'
    },
    {
      id: '4',
      images: '/assets/aacar/8.jpeg'
    },
    {
      id: '5',
      images: '/assets/aacar/9.jpeg'
    }
  ];


  follow = true;
  enablePan = true;

  index = 3;
  speed = 2000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `/assets/aacar/${num}.jpg`,
      id: `${num}.jpeg`
    };
  });

  constructor() { }


  indexChanged(index) {
    console.log(index);
  }

  toggleDirection($event) {
    this.direction = this.directionToggle ? 'right' : 'left';
  }

  a(i) {
    console.log(i);
  }

  ngOnInit() {
  }

}
