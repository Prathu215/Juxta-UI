import { Component, OnInit } from '@angular/core';
import { AutomobilesListService } from './automobiles-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-automobiles-list',
  templateUrl: './automobiles-list.component.html',
  styleUrls: ['./automobiles-list.component.css']
})
export class AutomobilesListComponent implements OnInit {

  automobiles: any[];
  isAutomobilesExists: boolean = true;
  porsche: any[] = [];
  audi: any[] = [];
  chevy:any[] = [];
  brands: any[] = [];
  panamera:any;
  cayanne:any;
  a5:any;
  r8:any;
  camaro:any;
  corvette:any;
  filteredBrands: any[] = [];
  automobilesListForm: FormGroup;
  isPorscheChecked: boolean = false;
  isPanameraChecked:boolean=false;
  isCayanneChecked:boolean=false;
  isAudiChecked:boolean=false;
  isA5Checked:boolean=false;
  isR8Checked:boolean=false;
  isChevyChecked:boolean=false;
  isCamaroChecked:boolean=false;
  isCorvetteChecked:boolean=false;
  porscheSeries:any[]=[];

  constructor(private automobilesListService: AutomobilesListService, private fb: FormBuilder) { }

  ngOnInit() {
    this.automobilesListService.getAutomobiles().subscribe(res => {
    //  console.log(res);
      this.automobiles = res;

    //  console.log("Printing electronics list");
      for (let entry of this.automobiles) {
        //console.log(entry.brand);
        this.brands.push(entry.brand);
      }

      this.filteredBrands = this.remove_duplicates(this.brands);
    //  console.log(this.filteredBrands, "filtered brands");

      for (let i = 0; i < this.automobiles.length; i++) {
      //  console.log(res[i].brand);

        if (res[i].brand == "porsche") {
      //    console.log(res[i], "printing dell");
          this.porsche.push(res[i]);
          // console.log(res[i]);
          // if(res[i].series=="inspiron"){
          //   this.dellSeries.push(res[i]);
          // }
           
         console.log(this.porscheSeries);         
        }
        if (res[i].brand == "audi") {
        //  console.log(res[i], "printing hp");
          this.audi.push(res[i]);
        }
        if (res[i].brand == "chevy") {
            this.chevy.push(res[i]);
          }
      }
     // console.log(this.dell, "dell array");
     // console.log(this.hp, "printing hp");

      if (this.automobiles == null) {
        this.isAutomobilesExists = !this.isAutomobilesExists;
      }
     // console.log(this.electronics);
    },
      err => alert("server not running"));
    this.automobilesListForm = this.fb.group({

    })
  }

  remove_duplicates(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    arr = [];
    for (let key in obj) {
      arr.push(key);
    }
    return arr;
  }

  onSelect(event: any) {
    console.log(event.target.value);

    if(event.target.value=="panamera" && event.target.checked==true){
        this.automobilesListService.getAutomobilesBySeries(event.target.value).subscribe(
          res=>{console.log(res);
            this.panamera=res;
            console.log("panamera is checked");
            // this.dellSeries.push(res);
            // console.log(this.dellSeries);
            this.isPanameraChecked=!this.isPanameraChecked;
          }
        )
    }
    if(event.target.value=="panamera" && event.target.checked==false){
     this.isPanameraChecked=false;
  }

  if(event.target.value=="a5" && event.target.checked==true){
    this.automobilesListService.getAutomobilesBySeries(event.target.value).subscribe(
      res=>{console.log(res);
        this.a5=res;
        console.log("a5 is checked");
        this.isA5Checked=!this.isA5Checked;
      }
    )
}
if(event.target.value=="a5" && event.target.checked==false){
 this.isA5Checked=false;
}

if(event.target.value=="r8" && event.target.checked==true){
  this.automobilesListService.getAutomobilesBySeries(event.target.value).subscribe(
    res=>{console.log(res);
      this.r8=res;
      console.log("r8 is checked");
      this.isR8Checked=!this.isR8Checked;
    }
  )
}
if(event.target.value=="r8" && event.target.checked==false){
this.isR8Checked=false;
}

  if(event.target.value=="cayanne" && event.target.checked==true){
    this.automobilesListService.getAutomobilesBySeries(event.target.value).subscribe(
      res=>{
        console.log(res);
        this.cayanne=res;
        console.log("vostro is checked");
        this.isCayanneChecked=!this.isCayanneChecked;
      }
    )
}
if(event.target.value=="cayanne" && event.target.checked==false){
  this.isCayanneChecked=false;
}
  
if(event.target.value=="camaro" && event.target.checked==true){
  this.automobilesListService.getAutomobilesBySeries(event.target.value).subscribe(
    res=>{
      console.log(res);
      this.camaro=res;
      console.log("camaro is checked");
      this.isCamaroChecked=!this.isCamaroChecked;
    }
  )
}
if(event.target.value=="camaro" && event.target.checked==false){
this.isCamaroChecked=false;
}

if(event.target.value=="corvette" && event.target.checked==true){
  this.automobilesListService.getAutomobilesBySeries(event.target.value).subscribe(
    res=>{
      console.log(res);
      this.corvette=res;
      console.log("corvette is checked");
      this.isCorvetteChecked=!this.isCorvetteChecked;
    }
  )
}
if(event.target.value=="corvette" && event.target.checked==false){
this.isCorvetteChecked=false;
}


    if (event.target.value == "porsche" && event.target.checked == true) {
      console.log(event.target.value, "is checked");
      this.isPorscheChecked = !this.isPorscheChecked;
    }
    if (event.target.value == "porsche" && event.target.checked == false) {
      console.log(event.target.value, "is unchecked");
      this.isPorscheChecked = false;
    }
    if (event.target.value == "audi" && event.target.checked == true) {
      console.log(event.target.value, "is checked");
      this.isAudiChecked = !this.isAudiChecked;
    }
    if (event.target.value == "audi" && event.target.checked == false) {
      console.log(event.target.value, "is unchecked");
      this.isAudiChecked = false;
    }
    
    if (event.target.value == "chevy" && event.target.checked == true) {
      console.log(event.target.value, "is checked");
      this.isChevyChecked = !this.isChevyChecked;
    }
    if (event.target.value == "chevy" && event.target.checked == false) {
      console.log(event.target.value, "is unchecked");
      this.isChevyChecked = false;
    }
  }


}
