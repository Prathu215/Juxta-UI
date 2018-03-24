import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()
export class RegistrationService {

  constructor(private http:Http) {}

  baseUrl="http://localhost:8080/admins";

  public getAdmins(){
    return this.http.get(this.baseUrl).map(res=>res.json());
  }

  public addAdmins(data:any):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify();
    console.log(data, "from service");         
    return this.http.post(this.baseUrl,data,options).map(res=>res.json());
  }
}
