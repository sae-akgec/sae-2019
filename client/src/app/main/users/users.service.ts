import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOMAIN } from '../../shared/assets';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  domain: string;
  constructor(private http: HttpClient) {
    this.domain = DOMAIN;
   }
   getCurrentWorkshops(){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
    return this.http.get(this.domain + '/api/workshops/', {headers:headers})
  }
  createTeamRegistration(body:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post<any>(`${this.domain}/api/teamregistration/`, body, { headers: headers })
  }
}
