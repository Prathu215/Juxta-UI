import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class AutomobilesListService {

  baseUrl:string="http://localhost:8080/";

  constructor(private http:Http) { }

  getAutomobiles(){
    this.http.get(this.baseUrl);
  }

}
