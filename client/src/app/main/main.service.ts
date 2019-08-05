import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOMAIN } from '../shared/assets';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  domain: string;

  constructor(private http: HttpClient) {
    this.domain = DOMAIN;
  }

  createContact(body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post<any>(`${this.domain}/api/contacts/`, body, { headers: headers })
  }

  createRegister(body: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post<any>(`${this.domain}/api/registration/`, body, { headers: headers })
  }
}
