import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,Observer } from "rxjs"
import { DOMAIN } from "../shared/assets";
/**
 * @description
 * @class
 */
@Injectable()
export class AuthService {
  domain = DOMAIN
  authToken:any;
  email:any;
  username:any;
  status: Observable<boolean>;
  private observer: Observer<boolean>;
  constructor(private http:HttpClient) {
    this.status = new Observable<boolean>(observer =>
      this.observer = observer
  );
  }

  registerUser(user){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.domain+'/api/auth/register/',user, {headers: headers});
  }
  loginUser(user){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.domain+'/api/auth/login/',user, {headers: headers});
  }
  forgotPassword(email){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.domain+'/api/auth/password/forgot/',email, {headers: headers});
  }
  resetPassword(form){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.domain+'/api/auth/password/reset/',form, {headers: headers});
  }

  getUsers(){
    const headers = new HttpHeaders(
      {
        'Content-Type':'application/json; charset=utf-8',
        'Authorization':'JWT ' + this.authToken
      });
    return this.http.get(this.domain+'/api/auth/login/', {headers: headers});
  }

  storeUserData(token,username,email){
    localStorage.setItem('id_token',token)
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    this.authToken = token;
    this.email = email;
    this.username = username;
  }
  
  logout(){
    this.authToken = null;
    this.username = null;
    this.email = null;
    localStorage.clear();
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token
  }
  changeState(newState: boolean) {
    if (this.observer !== undefined) this.observer.next(newState);
  }

}
