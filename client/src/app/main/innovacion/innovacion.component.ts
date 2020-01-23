import { Component, OnInit } from '@angular/core';
import { Innovacion } from '../shared/innovacion';
import { Photos } from '../shared/innovacion';
import { Videos } from '../shared/innovacion';
import {day1} from '../shared/projects';
import {day2} from '../shared/projects';
import {day3} from '../shared/projects';
import {day4} from '../shared/projects'

@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html',
  styleUrls: ['./innovacion.component.scss']
})
export class InnovacionComponent implements OnInit {
  plans:any;
  miniprojects: day1[] = [
    { 
      name:'Led Blinking',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/LEDBLINKING.jpg?raw=true',
      description:'The first program every programmer learns consists in writing enough code to make their code show the sentence "Hello World!" on a screen. The blinking LED is the "Hello World!" of physical computing'

    },
    {
      name:'Ultrasonic Sensors',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/ultrasonic.jpg?raw=true',
      description:'In this project I will introduce you to the HC-SR04 Ultrasonic sensor. It works by sending sound waves from the transmitter, which then bounce off of an object and then return to the receiver. '
    },
    {
      name:'OLED',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/weather.jpg?raw=true',
      description:'OLED screen with the model SSD1306 of resolution 128X64 pixels, we will introduce you about Oled screens and its intefacing'
    }
  ]
  minproject: day2[] = [
    {
      name:'RFID',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/rfid.jpg?raw=true',
      description:'Radio-frequency identification .In this project we will introduce you about RFID tags , cards and its module.'
    },
    {
      name:'Distance Measurement',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/distancemeasurement.jpeg?raw=true',
      description:'In this project intefacing of HC-SR04 Ultrasonic sensor with Oled  model SSD1306 of resolution 128X64 pixels will be performed to display obstacle distance on display.'
    },
    {
      name:'Ir Sensor',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/ir%20sensor.jpg?raw=true',
      description:'Concepts of IR sensor and its interfacing with LED and Node Mcu will be performed.'
    }
  ]
  majorprojects: day3[] = [
    {
      name:'Relay Module',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/rely.jpg?raw=true',
      description:' Relay is an electrically operated switch.In this project we will try to interface a relay module to NodeMCU. Then you can control your appliances with NodeMCU wirelessly'
    },
    {
      name:'RFID Door Locking',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/doorlocking.jpeg?raw=true',
      description:'The classic RFID door lock. Its classic in that whole, "We live in the future and take it for granted at this point sense. In this project, we will set up a door latch that can be opened with the swipe of an RFID Tag'
    },
    {
      name:'NodeMcu OlED Interfacing',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/oled.jpg?raw=true',
      description:'OLED stands for Organic Light Emitting Diode. The OLED displays are very small and have high resolution.In this project ,we will show temperature and humidity data with help of weather API with out using any sensor '
    }
  ]
  majprojects: day4[] = [
    {
      name:'Sound Buzzers',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/buzzer.jpeg?raw=true',
      description:'In this project interfacing of various sensors like ultrasonic sensor ,Ir sensor will be performed with help of NodeMcu'
    },
    {
      name:'LED with WiFi',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/ledwifi.jpeg?raw=true',
      description:'In this project we will be using Andriod Application to control Eledtrical appliances like LED ,Elctric Buls and many more...'
    },
    {
      name:'RC BOT ',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/rcbot.jpeg?raw=true',
      description:'A Remote controlled Bot by the help of Andriod Application (INNOVACION) .Bot race event will be conducted with the help of RC bots'
    },
    {
      name:'Maze Follower Bot',
      image:'https://github.com/sae-akgec/innovacion-back-end/blob/master/Assets/Organizer%20heads/Maze-solving.jpg?raw=true',
      description:'A maze solving robot is designed to move in a maze and escape through it by following its walls. A maze solving robot is quite similar to a line follower. Like a line follower has to follow black strip lines, a maze follower finds a wall and starts following it until it finds an escape route.'
    }
  ]
  
  constructor() { }


  ngOnInit() {
    this.plans = [
      {planPrice: "2500",  teamMember: "5"},
      {planPrice: "2400",  teamMember: "4"},
      {planPrice: "2400",  teamMember: "3"},
      {planPrice: "2200",  teamMember: "2"},
      {planPrice: "2000",  teamMember: "1"}    
    ];
  }


}
