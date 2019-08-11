import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public categories: any[] = [];
  public posts: any[];
  category: String = '';
  month:String = '';
  year:String = '';

  constructor(private _blogService:BlogService) { }

  ngOnInit() {
    this._blogService.getAllCategories().subscribe(
      (categories) => this.categories = categories,
      (err) => console.log(err) 
    )
    this._blogService.getAllPosts(this.category, this.month, this.year).subscribe(
      (posts) => { this.posts = posts },
      (err) => { console.log(err) }
    )
  }

}
