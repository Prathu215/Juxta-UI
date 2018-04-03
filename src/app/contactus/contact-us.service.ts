import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactUsService {

  private baseUrl="http://localhost:8080/contactus/save";

  constructor(private http:Http) { }

  public saveCustomer(data:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl,data,options)
               .map(res=>res.json())
               .catch(err=>Observable.throw(err));
  }

}
