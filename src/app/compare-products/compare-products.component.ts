import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {

  private subscription:Subscription;
  categoryName:string;
  isAutomobile:boolean=false;
  isElectronics:boolean=false; //Actually we don't need this, but just in case.

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      //this.categoryName = +params['categoryname']; 
      console.log(params.categoryName);
      if(params.categoryName=="automobiles"){        
        this.isAutomobile=!this.isAutomobile;
        console.log("it is automobile");
      }
      if(params.categoryName=='electronics'){
        this.isElectronics=!this.isElectronics;
      }
      
      })
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
