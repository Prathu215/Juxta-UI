import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ElectronicsListService {

  baseUrl="http://localhost:8080/devicedetails";
  constructor(private http:Http) { }

  getElectronics():Observable<any>{
    return this.http.get(this.baseUrl)
                    .map(res=>res.json())
                    .catch(error => Observable.throw(error))}
  
}
