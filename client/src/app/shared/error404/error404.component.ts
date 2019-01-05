import { Component, OnInit } from "@angular/core";
import { IMAGE_404 } from "../assets";
@Component({
  selector: "app-error404",
  templateUrl: "./error404.component.html",
  styleUrls: ["./error404.component.css"]
})

export class Error404Component implements OnInit {
  err_404 = IMAGE_404
  constructor() { 

  }

  ngOnInit() {

  }
}
