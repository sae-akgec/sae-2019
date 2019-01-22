import { Component, OnInit } from '@angular/core';
import { ASSETS } from 'src/app/shared/assets';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  LOGO = ASSETS + '/logo.jpeg';

  constructor() { }

  ngOnInit() {
  }

}
