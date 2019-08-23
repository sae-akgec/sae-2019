import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.
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
   public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  constructor() { }


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
