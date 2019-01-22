import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  workshop: any;
  slug: any;
  constructor(private mainService: MainService, private activeRoute: ActivatedRoute) { }
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100vh',
      'top': 0,
      'left': 0,
      'background': 'linear-gradient(to right, #2C5364, #203A43, #0F2027)'
    };

    this.myParams = {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {

      },
      "retina_detect": true
    }
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.slug = params['id']
        this.mainService.getWorkshop(params['id']).subscribe(
          (workshop) => {
            this.workshop = workshop;
          }, (err) => {
            console.log(err);
          });
      }
    });
  }

}
