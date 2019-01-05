import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOMAIN } from "../../shared/assets";


@Injectable()
export class MainService {
  domain = DOMAIN
  constructor(private httpClient:HttpClient) {
    
  }
  getEvents(){
    return this.httpClient.get(this.domain + '/api/events/')
  }
  getWorkshops(){
    return this.httpClient.get(this.domain + '/api/workshops/')
  }
  getMembers(){
    return this.httpClient.get(this.domain + '/api/members/')
  }
  getEvent(id:number){
    return this.httpClient.get(this.domain + '/api/events/detail/' + id + '/')
  }
  getWorkshop(name:string){
    return this.httpClient.get(this.domain + '/api/workshops/detail/' + name + '/')
  }

  contactUs(contact){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.httpClient.post(this.domain+'/api/contact/',contact, {headers: headers});
  }

}
