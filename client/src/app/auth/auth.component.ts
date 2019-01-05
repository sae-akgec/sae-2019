import { Component, OnInit } from "@angular/core";
import { IMAGE_AUTH } from "../shared/assets";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})

export class AuthComponent implements OnInit {
  auth_background = IMAGE_AUTH
  constructor() { 

  }

  ngOnInit() {

  }
}
