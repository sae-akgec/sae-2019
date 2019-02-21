import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DOMAIN } from '../shared/assets';


@Injectable()
export class MainService {
  domain:string

  constructor(private http:HttpClient) {
    this.domain = DOMAIN
  }

  getTeam():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any[]>(this.domain + '/api/team/', {headers: headers})
  }

  getWorkshop(slug):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any>(this.domain + '/api/workshops/' + slug + '/', {headers: headers})
  }

  getEvent(slug):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any>(this.domain + '/api/events/' + slug + '/', {headers: headers})
  }

  getEvents():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any>(this.domain + '/api/events/', {headers: headers})
  }

  getWorkshops():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any>(this.domain + '/api/workshops/', {headers: headers})
  }
  getBlogs():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any>(this.domain + '/api/blogs/latest', {headers: headers})
  }
  
  regsiter(body:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post(this.domain + '/api/workshop/register/', body, {headers: headers})
  }

  aacar(body:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post(this.domain + '/api/workshop/aacar/', body, {headers: headers})
  }

  contactUs(body:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post(this.domain + '/api/contact/', body, {headers: headers})
  }
}
