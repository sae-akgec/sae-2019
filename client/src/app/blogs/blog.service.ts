import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOMAIN } from '../shared/assets';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  domain: string;

  constructor(private http: HttpClient) {
    this.domain = DOMAIN;
  }

  getPostBySlug(slug: String) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.get<any>(this.domain + '/api/blog/posts/' + slug + '/', { headers: headers })
  }

  getAllPosts(category: String, month: String, year: String) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.get<any[]>(`${this.domain}/api/blog/posts?category=${category}&month=${month}&year=${year}`, { headers: headers })
  }

  getAllCategories() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.get<any[]>(this.domain + '/api/blog/categories', { headers: headers })
  }

  createComment(postSlug: String, body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post<any>(`${this.domain}/api/blog/posts/${postSlug}/comments`, body, { headers: headers })
  }
}
