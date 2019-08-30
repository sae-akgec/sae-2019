import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  sliderArray = [
    {img: 'http://bloquo.cc/img/works/1.jpg', alt: '', text: '365 Days Of weddings a year'},
    {img: 'http://bloquo.cc/img/works/2.jpg', alt: '',  text: '365 Days Of weddings a year'},
    {img: 'http://bloquo.cc/img/works/3.jpg', alt: '', text: '365 Days Of weddings a year'},
    {img: 'http://bloquo.cc/img/works/4.jpg', alt: '',  text: '365 Days Of weddings a year'},
    {img: 'http://bloquo.cc/img/works/5.jpg', alt: '', text: '365 Days Of weddings a year'}
   ];
   transform: number;
   selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }

   keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if (this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }

}