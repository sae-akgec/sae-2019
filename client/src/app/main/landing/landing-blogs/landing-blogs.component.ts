import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-landing-blogs',
  templateUrl: './landing-blogs.component.html',
  styleUrls: ['./landing-blogs.component.scss']
})
export class LandingBlogsComponent implements OnInit {

  blogs:any[];
  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.mainService.getBlogs().subscribe(()=>{
      (blogs)=>{
        this.blogs = blogs;
      }
      (err) =>{
        console.log(err)
      }
    })
  }

}
