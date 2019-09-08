import { Component, OnInit } from '@angular/core';

import { Member } from '../../shared/member';
@Component({
  selector: 'app-home-team',
  templateUrl: './home-team.component.html',
  styleUrls: ['./home-team.component.scss']
})
export class HomeTeamComponent implements OnInit {
  members: Member[] = [
    {
      id: '0',
      image: 'assets/compressjpeg/pp.jpg',
      name: 'Alok Mishra',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/alok.mishra.9484',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/alok-mishra-851260135'
    },
    {
      id: '1',
      image: 'assets/compressjpeg/12.jpg',
      name: 'Aditya Rai',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/dipu.rai.18',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/aditya-rai-0b14b2134'
    },
    {
      id: '2',
      image: 'assets/compressjpeg/31.jpg',
      name: 'Abhinav Kumar',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/abhinav.kumar.mzn',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '3',
      image: 'assets/compressjpeg/5.jpg',
      name: 'Sooraj Singh',
      branch: 'Mechanical',
      facebooklink: '',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '4',
      image: 'assets/compressjpeg/29.jpg',
      name: 'Stuti Sengar',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100009409062746',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '5',
      image: 'assets/compressjpeg/331.jpg',
      name: 'Mishank Gautam',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/mishank.gautam.52',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '6',
      image: 'assets/compressjpeg/30.jpg',
      name: 'Himanshu Chauhan',
      branch: 'Mechanical',
      facebooklink: '',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '7',
      image: 'assets/compressjpeg/gg.jpg',
      name: 'Deepanshu Tyagi',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/deepanshut041',
      githublink: 'https://github.com/deepanshut041',
      linkedInlink: 'https://www.linkedin.com/in/deepanshut041/'
    },
    // {
    //   id: '8',
    //   image: 'assets/compressjpeg/pp.jpg',
    //   name: 'Alok Mishra',
    //   branch: 'Mechanical',
    //   facebooklink: 'https://www.facebook.com/alok.mishra.9484',
    //   githublink: '',
    //   linkedInlink: 'https://www.linkedin.com/in/alok-mishra-851260135'
    // },
    {
      id: '9',
      image: 'assets/compressjpeg/18.jpeg',
      name: 'Avneesh Kumar',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/haq.se.single007',
      githublink: 'https://github.com/kumarbittu29',
      linkedInlink: 'https://www.linkedin.com/in/avaneesh-kumar-a94117126'
    },
    {
      id: '10',
      image: 'assets/compressjpeg/27.jpg',
      name: 'Rohit Sinha',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/rohit.sinhaa',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/-rohit-sinha-'
    },
    {
      id: '11',
      image: 'assets/compressjpeg/7.jpg',
      name: 'Ananya Baranwal',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/profile.php?id=100010772202173',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/ananya-baranwal-913944140'
    },
    {
      id: '12',
      image: 'assets/compressjpeg/96.jpeg',
      name: 'Satyam Gupta',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100007432145509',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '13',
      image: 'assets/compressjpeg/11.jpg',
      name: 'Ashutosh Yadav',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100007653043732',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/ashutosh-yadav-261081183'
    },
    {
      id: '14',
      image: 'assets/compressjpeg/24.jpg',
      name: 'Honey',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/honeysng7861',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/alok-mishra-851260135'
    },
    {
      id: '15',
      image: 'assets/compressjpeg/28.jpg',
      name: 'BHanu Pratap Singh',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100007704040059',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '16',
      image: 'assets/compressjpeg/26.jpg',
      name: 'Ajay Raj',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100006388244479',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '17',
      image: 'assets/compressjpeg/25.jpg',
      name: 'Amit Kumar Singh',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100012053717619',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '18',
      image: 'assets/compressjpeg/4.jpg',
      name: 'Snajay Prasad Upadhaya',
      branch: 'Mechanical',
      facebooklink: '',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '19',
      image: 'assets/compressjpeg/2.jpg',
      name: 'Isshaan Arora',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/ishaan.arora.50',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '20',
      image: 'assets/compressjpeg/9.jpg',
      name: 'Rishabh Katiyar',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/risha.katiyar7',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '21',
      image: 'assets/compressjpeg/15.jpg',
      name: 'Akshat Srivastava',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/akshat.srivastava.3538',
      githublink: 'https://github.com/akshatsrivastava13',
      linkedInlink: 'https://www.linkedin.com/in/akshat-srivastava-8404ba169/'
    },
    {
      id: '22',
      image: 'assets/compressjpeg/rishabh.jpg',
      name: 'Rishabh Jain',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/profile.php?id=100017437457286',
      githublink: 'https://github.com/Rishabh2324',
      linkedInlink: '"https://www.linkedin.com/in/rishabh-jain-83258b170/'
    },
    {
      id: '23',
      image: 'assets/compressjpeg/balraam.jpg',
      name: 'Balraam Singh',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/profile.php?id=100019029193237',
      githublink: 'https://github.com/balramsingh54',
      linkedInlink: 'https://www.linkedin.com/in/balram-kumar-singh-077797168/'
    },
    {
      id: '24',
      image: 'assets/compressjpeg/6.jpg',
      name: 'Abhishek Singh',
      branch: 'Innovation',
      facebooklink: 'https://m.facebook.com/bittuabhi9918?ref=bookmarks',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/abhishek-singh-8b2a4016b'
    },
    {
      id: '25',
      image: 'assets/compressjpeg/22.jpg',
      name: 'Umang Khare',
      branch: 'Innovation',
      facebooklink: 'https://www.facebook.com/umang.khare.54?ref=br_rs',
      githublink: 'https://github.com/umangkhare',
      linkedInlink: 'https://www.linkedin.com/in/umang-khare-3ab869165/'
    },
    {
      id: '26',
      image: 'assets/compressjpeg/anurag.jpg',
      name: 'Anurag Mishra',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100008343222388',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '27',
      image: 'assets/compressjpeg/19.jpg',
      name: 'Bobby Sirohi',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/boby.sirohi.509',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '28',
      image: 'assets/compressjpeg/megha.jpg',
      name: 'Megha Gupta',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100013721895357',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '29',
      image: 'assets/compressjpeg/jitendra.jpeg',
      name: 'Jitendra Kumar',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100016228027473',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/jitendra-kumar-a9505517a'
    },
    {
      id: '30',
      image: 'assets/compressjpeg/nikhil.jpg',
      name: 'Nikhil Kumar',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100010043162065',
      githublink: '',
      linkedInlink: ''
    },

    {
      id: '32',
      image: 'assets/compressjpeg/13.jpg',
      name: 'Saurabh Mishra',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/profile.php?id=100012109187704',
      githublink: '',
      linkedInlink: 'https://www.linkedin.com/in/saurabh-kumar-mishra-ab5974170'
    },
    {
      id: '33',
      image: 'assets/compressjpeg/divyanshu.jpeg',
      name: 'Divyanshu Verma',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/Divyanshu.verma.k',
      githublink: '',
      linkedInlink: ''
    },

    {
      id: '35',
      image: 'assets/compressjpeg/modes.jpeg',
      name: 'Mohd. Modesseer',
      branch: 'Mechanical',
      facebooklink: 'https://www.facebook.com/mohd.modesseer',
      githublink: '',
      linkedInlink: ''
    },
    {
      id: '36',
      image: 'assets/compressjpeg/mahima.jpeg',
      name: 'Mahima',
      branch: 'Mechanical',
      facebooklink: '',
      githublink: '',
      linkedInlink: ''
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
