import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOMAIN } from '../../shared/assets';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  domain: string;
  authToken: any;
  constructor(private http: HttpClient) {
    this.domain = DOMAIN;
    this.authToken = localStorage.getItem('id_token');

   }
   getCurrentWorkshops(){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
    return this.http.get(this.domain + '/api/workshops/', {headers:headers})
  }
  createTeamRegistration(msg) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'JWT ' + this.authToken
      });
      console.log(msg)
    return this.http.post(this.domain + '/api/teamregistration/',msg, { headers: headers });
  }
}
