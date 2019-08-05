import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-blogs-detail',
  templateUrl: './blogs-detail.component.html',
  styleUrls: ['./blogs-detail.component.scss']
})
export class BlogsDetailComponent implements OnInit {
  postSlug: String;
  commentForm: FormGroup;
  post: any;

  constructor(private fb: FormBuilder, private _blogService: BlogService, private route: ActivatedRoute) {
    let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    this.route.params.subscribe((params) => {
      this.postSlug = params['id'];
    })
    this.commentForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailFormat)])],
      'subject': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'description': [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this._blogService.getPostBySlug(this.postSlug).subscribe(
      (post) => this.post = post,
      (err) => console.log(err)
    )
  }

  submitComment() {
    if (this.commentForm.valid) {
      this._blogService.createComment(this.postSlug, this.commentForm.value).
        subscribe(
          (success) => setTimeout(() =>this.ngOnInit() , 1000) ,
          (err) => { console.log(err) })
    }
  }

}
