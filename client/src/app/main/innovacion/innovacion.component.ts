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
  innovacions: Innovacion[] = [
    {
      id: '0',
      images: '/assets/carousel/0.jpg'

    },
    {
      id: '1',
      images: '/assets/carousel/1.jpg'

    },
    {
      id: '2',
      images: '/assets/carousel/2.jpg'

    },
    {
      id: '3',
      images: '/assets/carousel/3.jpg'

    },

  ];
  photos: Photos[] = [
    {
      id: '0',
      images: '/assets/carousel/5.jpg'
    },
    {
      id: '1',
      images: '/assets/carousel/6.jpg'
    },
    {
      id: '2',
      images: '/assets/carousel/7.jpg'
    },
    {
      id: '3',
      images: '/assets/carousel/8.jpg'
    },
    {
      id: '4',
      images: '/assets/carousel/9.jpg'
    },
    {
      id: '5',
      images: '/assets/carousel/10.jpg'
    }
  ];
  videos: Videos[] = [

    {
      id: '0',
      links: 'https://www.youtube.com/watch?v=rhROhH8gSNA'
    },
    {
      id: '1',
      links: 'https://www.youtube.com/watch?v=5P9Mddb2wLI'
    },
    {
      id: '2',
      links: 'https://www.youtube.com/watch?v=Qchh3Yna2As'
    },
    {
      id: '3',
      links: 'https://www.youtube.com/watch?v=CLCUA6yAJgs'
    },
    {
      id: '4',
      links: 'https://www.youtube.com/watch?v=vwjU7D2C5kc'
    },
    {
      id: '5',
      links: 'https://www.youtube.com/watch?v=_L1qZarcYxw'
    }

  ]

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
