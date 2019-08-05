import { Component, OnInit, HostListener, Inject } from '@angular/core'; 
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 190) {
       let element = document.getElementById('navbar');
       element.classList.add('navbar-color');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('navbar-color'); 
     }
  }

}
