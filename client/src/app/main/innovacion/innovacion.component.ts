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
      images: '/assets/carousel/1.jpg'

    },
    {
      id: '1',
      images: '/assets/carousel/2.jpg'

    },
    {
      id: '2',
      images: '/assets/carousel/3.jpg'

    }
  ];
  follow = true;
  enablePan = true;

  index = 8;
  speed = 3000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '123456789'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `/assets/carousel/${num}.jpg`,
      id: `${num}.jpg`
    };
  });

  constructor() { }
  push() {
    this.avatars.push(
      {
        url: `/assets/images/${this.avatars.length + 1}`,
        id: `${this.avatars.length + 1}`
      }
    );
  }

  remove() {
    this.avatars.splice(this.avatars.length - 1, 1);
  }


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
