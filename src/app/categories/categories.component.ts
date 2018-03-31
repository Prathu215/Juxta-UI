import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private router:Router) { }
  categoryName:string;

  ngOnInit() {
  }

  routeToAutomobiles(){    
    this.categoryName="automobiles";
    this.router.navigate(['/categories',this.categoryName]);
  }

  routeToElectronics(){
    this.categoryName="electronics";
    this.router.navigate(['/categories',this.categoryName]);
  }

}
