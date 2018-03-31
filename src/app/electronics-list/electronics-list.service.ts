import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ElectronicsListService {

  baseUrl="http://localhost:8080/devicedetails";
  constructor(private http:Http) { }

  getElectronics():Observable<any>{
    return this.http.get(this.baseUrl).map(res=>res.json());
  }
}
