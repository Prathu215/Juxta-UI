import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminsService {

  private baseUrl="http://localhost:8080/admins";

  constructor(private http:Http) { }

  public getAdmins():Observable<any>{
    return this.http.get(this.baseUrl).map(res=>res.json());
  }

  

}
