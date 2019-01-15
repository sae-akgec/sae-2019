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

  getTeam():Observable<any[]>{
    const headers = new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    });
    return this.http.get<any[]>(this.domain + '/api/team/', {headers: headers})
  }
  
//   regsiter(body:any): Observable<any>{
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json; charset=utf-8'
//     });
//     return this.http.post(this.domain + '/api/registrations/', body, {headers: headers})
//   }
}
