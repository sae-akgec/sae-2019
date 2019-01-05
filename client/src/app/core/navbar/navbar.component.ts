import { Component, OnInit, AfterViewInit } from "@angular/core";
import { CoreService } from "../core.service";
import { AuthGaurd } from "../../auth/auth-gaurd.service";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements OnInit {
  isActive: boolean = false;
  auth_subscription: any;
  latest_workshop:any;
  constructor(private coreService: CoreService,
    private authGaurd: AuthGaurd, private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.coreService.verifyUser().subscribe((res) => {
      this.isActive = true
      this.authGaurd.isLoggedIn = true
      this.authService.changeState(true)
    }, (err) => {
      this.isActive = false
      this.authService.changeState(false)
    })

    this.auth_subscription = this.authService.status.subscribe(status => {
      this.isActive = status;
    });
  }

  ngAfterViewInit() {
    var nav = document.getElementById('navbar');
    var inner_nav = document.getElementById('inner-navbar');
    var empty_nav = document.getElementById('empty-navbar');
    window.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop >= 150) {
        nav.classList.add("fixed-top");
        inner_nav.classList.add("container");
        empty_nav.classList.add("do");

      } else {
        nav.classList.remove("fixed-top");
        inner_nav.classList.remove("container");
        empty_nav.classList.remove("do");
      }
    })
    this.coreService.getCurrentWorkshops().subscribe(
      (workshops) => {
        let workshop = workshops["workshops"]
        if (workshop.length >= 0) {
          this.latest_workshop = workshop[0]
          setTimeout(() => {
            var button = document.getElementById('latestTimeout');
            button.click()
          }, 2000);
        }
      }
    )
  }

  signOut() {
    this.coreService.logout()
    this.isActive = false
    this.authGaurd.isLoggedIn = false
    this.router.navigate([''])
    this.authService.changeState(false)
  }
}
