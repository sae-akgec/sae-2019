import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  navOpen(){
    let aside = document.getElementById('navAside');
    console.log("Hello")
    aside.classList.toggle('open');
  }
}
