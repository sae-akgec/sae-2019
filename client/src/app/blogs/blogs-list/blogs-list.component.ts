import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  public posts: any[];
  category: String = '';
  month: String = '';
  year: String = '';

  constructor(private _blogService: BlogService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] || '';
      this.month = params['month'] || '';
      this.year = params['year'] || '';
    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this._blogService.getAllPosts(this.category, this.month, this.year).subscribe(
      (posts) => { this.posts = posts },
      (err) => { console.log(err) }
    )
  }

}
