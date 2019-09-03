import { Component, OnInit } from '@angular/core';
import { Supra } from '../shared/supra';
@Component({
  selector: 'app-supra',
  templateUrl: './supra.component.html',
  styleUrls: ['./supra.component.scss']
})
export class SupraComponent implements OnInit {
  supras: Supra[] = [
    {
      id: '0',
      images: '/assets/images/1.jpg'

    },
    {
      id: '1',
      images: '/assets/images/2.jpg'

    },
    {
      id: '2',
      images: '/assets/images/3.jpg'

    },
    {
      id: '3',
      images: '/assets/images/5.jpg'

    },
    {
      id: '4',
      images: '/assets/images/6.jpg'

    },
    {
      id: '5',
      images: '/assets/images/7.jpg'

    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
