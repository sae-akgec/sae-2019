import { Component, OnInit } from '@angular/core';
import { Innovacion } from '../shared/innovacion';
import { Photos } from '../shared/innovacion';
import { Videos } from '../shared/innovacion';
import { day1 } from '../shared/projects';
import { day2 } from '../shared/projects';
import { day3 } from '../shared/projects';
import { day4 } from '../shared/projects'

@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html',
  styleUrls: ['./innovacion.component.scss']
})
export class InnovacionComponent implements OnInit {
  plans: any;
  miniprojects: day1[] = [
    {
      name: 'Led Blinking',
      // image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/LEDBLINKING.jpg?raw=true',
      image: '/assets/images/1.jpg',
      description: 'The first program every programmer learns consists in writing enough code to make their code show the sentence "Hello World!" on a screen. The blinking LED is the "Hello World!" of physical computing'

    },
    {
      name: 'Ultrasonic Sensors',
      image: '/assets/images/2.jpg',
      // image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/ultrasonic.jpg?raw=true',
      description: 'In this project I will introduce you to the HC-SR04 Ultrasonic sensor. It works by sending sound waves from the transmitter, which then bounce off of an object and then return to the receiver. '
    },
    {
      name: 'OLED',
      image: '/assets/images/3.jpg',
      // image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/weather.jpg?raw=true',
      description: 'OLED screen with the model SSD1306 of resolution 128X64 pixels, we will introduce you about Oled screens and its intefacing'
    }
  ]
  minproject: day2[] = [
    {
      name: 'RFID',
      // image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/rfid.jpg?raw=true',
      image: '/assets/images/14.jpg',
      description: 'Radio-frequency identification .In this project we will introduce you about RFID tags , cards and its module.'
    },
    {
      name: 'Distance Measurement',
      // image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/distancemeasurement.jpeg?raw=true',
      image: '/assets/images/15.jpg',
      description: 'In this project intefacing of HC-SR04 Ultrasonic sensor with Oled  model SSD1306 of resolution 128X64 pixels will be performed to display obstacle distance on display.'
    },
    {
      name: 'Ir Sensor',
      // image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/ir%20sensor.jpg?raw=true',
      image: '/assets/images/19.jpg',
      description: 'Concepts of IR sensor and its interfacing with LED and Node Mcu will be performed.'
    }
  ]
  majorprojects: day3[] = [
    {
      name: 'Relay Module',
      image: '/assets/images/8.jpg',

      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/rely.jpg?raw=true',
      description: ' Relay is an electrically operated switch.In this project we will try to interface a relay module to NodeMCU. Then you can control your appliances with NodeMCU wirelessly'
    },
    {
      name: 'RFID Door Locking',
      image: '/assets/images/9.jpg',

      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/doorlocking.jpeg?raw=true',
      description: 'The classic RFID door lock. Its classic in that whole, "We live in the future and take it for granted at this point sense. In this project, we will set up a door latch that can be opened with the swipe of an RFID Tag'
    },
    {
      name: 'NodeMcu OlED Interfacing',
      image: '/assets/images/10.jpg',

      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/oled.jpg?raw=true',
      description: 'OLED stands for Organic Light Emitting Diode. The OLED displays are very small and have high resolution.In this project ,we will show temperature and humidity data with help of weather API with out using any sensor '
    }
  ]
  majprojects: day4[] = [
    {
      name: 'Sound Buzzers',
      image:'https://scontent.fdel24-1.fna.fbcdn.net/v/t1.0-9/56517062_3034825063198177_279503595311726592_n.jpg?_nc_cat=102&_nc_ohc=H1AppLl-CHkAX_f6J2Y&_nc_ht=scontent.fdel24-1.fna&oh=9239a2fb68c9f64e754dafe7e2def052&oe=5EF5629C',
      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/buzzer.jpeg?raw=true',
      description: 'In this project interfacing of various sensors like ultrasonic sensor ,Ir sensor will be performed with help of NodeMcu'
    },
    {
      name: 'LED with WiFi',
      image:'https://scontent.fdel24-1.fna.fbcdn.net/v/t1.0-9/56899666_3034825143198169_3341039322798227456_n.jpg?_nc_cat=103&_nc_ohc=7vT5kgwQKKUAX_vv3XU&_nc_ht=scontent.fdel24-1.fna&oh=bb81a8ba32d62f56015b4cbe92daae8f&oe=5EF98C20',
      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/ledwifi.jpeg?raw=true',
      description: 'In this project we will be using Andriod Application to control Eledtrical appliances like LED ,Elctric Buls and many more...'
    },
    {
      name: 'RC BOT ',
      image:'https://scontent.fdel24-1.fna.fbcdn.net/v/t1.0-9/57155557_3034825659864784_6376927214990000128_n.jpg?_nc_cat=110&_nc_ohc=MPRvNYQdWVIAX-KISLX&_nc_ht=scontent.fdel24-1.fna&oh=d790f9ef9340e5d443c0a5d1fb466a77&oe=5EF68556',
      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/rcbot.jpeg?raw=true',
      description: 'A Remote controlled Bot by the help of Andriod Application (INNOVACION) .Bot race event will be conducted with the help of RC bots'
    },
    {
      name: 'Maze Follower Bot',
      image:'https://scontent.fdel24-1.fna.fbcdn.net/v/t1.0-9/56706257_3034825789864771_6013221490214830080_n.jpg?_nc_cat=102&_nc_ohc=Tw_zuSHdqowAX_LR5qv&_nc_ht=scontent.fdel24-1.fna&oh=545195b2735a43685c3d74573ee8cb98&oe=5EFABF59',
      // image: 'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/Maze-solving.jpg?raw=true',
      description: 'A maze solving robot is designed to move in a maze and escape through it by following its walls. A maze solving robot is quite similar to a line follower. Like a line follower has to follow black strip lines, a maze follower finds a wall and starts following it until it finds an escape route.'
    }
  ]

  constructor() { }


  ngOnInit() {
    this.plans = [
      { planPrice: "2500", teamMember: "5" },
      { planPrice: "2400", teamMember: "4" },
      { planPrice: "2400", teamMember: "3" },
      { planPrice: "2200", teamMember: "2" },
      { planPrice: "2000", teamMember: "1" }
    ];
  }


}
