import { Component, OnInit } from '@angular/core';
import { ElectronicsListService } from './electronics-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-electronics-list',
  templateUrl: './electronics-list.component.html',
  styleUrls: ['./electronics-list.component.css']
})
export class ElectronicsListComponent implements OnInit {

  electronics: any[];
  isElectronicsExists: boolean = true;
  dell: any[] = [];
  hp: any[] = [];
  apple:any[] = [];
  brands: any[] = [];
  inspiron:any;
  vostro:any;
  pavilion:any;
  envy:any;
  macpro:any;
  macair:any;
  filteredBrands: any[] = [];
  electronicsListForm: FormGroup;
  isDellChecked: boolean = false;
  isInspironChecked:boolean=false;
  isVostroChecked:boolean=false;
  isHpChecked:boolean=false;
  isPavilionChecked:boolean=false;
  isEnvyChecked:boolean=false;
  isAppleChecked:boolean=false;
  isMacProChecked:boolean=false;
  isMacAirChecked:boolean=false;
  dellSeries:any[]=[];

  constructor(private electronicsListService: ElectronicsListService, private fb: FormBuilder) { }

  ngOnInit() {
    this.electronicsListService.getElectronics().subscribe(res => {
    //  console.log(res);
      this.electronics = res;

    //  console.log("Printing electronics list");
      for (let entry of this.electronics) {
        //console.log(entry.brand);
        this.brands.push(entry.brand);
      }

      this.filteredBrands = this.remove_duplicates(this.brands);
    //  console.log(this.filteredBrands, "filtered brands");

      for (let i = 0; i < this.electronics.length; i++) {
      //  console.log(res[i].brand);

        if (res[i].brand == "Dell") {
      //    console.log(res[i], "printing dell");
          this.dell.push(res[i]);
          // console.log(res[i]);
          // if(res[i].series=="inspiron"){
          //   this.dellSeries.push(res[i]);
          // }
           
         console.log(this.dellSeries);         
        }
        if (res[i].brand == "HP") {
        //  console.log(res[i], "printing hp");
          this.hp.push(res[i]);
        }
        if (res[i].brand == "Apple") {
            this.apple.push(res[i]);
          }
      }
     // console.log(this.dell, "dell array");
     // console.log(this.hp, "printing hp");

      if (this.electronics == null) {
        this.isElectronicsExists = !this.isElectronicsExists;
      }
     // console.log(this.electronics);
    },
      err => alert("server not running"));
    this.electronicsListForm = this.fb.group({

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

    if(event.target.value=="inspiron" && event.target.checked==true){
        this.electronicsListService.getElectronicsBySeries(event.target.value).subscribe(
          res=>{console.log(res);
            this.inspiron=res;
            console.log("inspiron is checked");
            // this.dellSeries.push(res);
            // console.log(this.dellSeries);
            this.isInspironChecked=!this.isInspironChecked;
          }
        )
    }
    if(event.target.value=="inspiron" && event.target.checked==false){
     this.isInspironChecked=false;
  }

  if(event.target.value=="pavilion" && event.target.checked==true){
    this.electronicsListService.getElectronicsBySeries(event.target.value).subscribe(
      res=>{console.log(res);
        this.pavilion=res;
        console.log("pavilion is checked");
        this.isPavilionChecked=!this.isPavilionChecked;
      }
    )
}
if(event.target.value=="pavilion" && event.target.checked==false){
 this.isPavilionChecked=false;
}

if(event.target.value=="envy" && event.target.checked==true){
  this.electronicsListService.getElectronicsBySeries(event.target.value).subscribe(
    res=>{console.log(res);
      this.envy=res;
      console.log("envy is checked");
      this.isEnvyChecked=!this.isEnvyChecked;
    }
  )
}
if(event.target.value=="envy" && event.target.checked==false){
this.isEnvyChecked=false;
}

  if(event.target.value=="vostro" && event.target.checked==true){
    this.electronicsListService.getElectronicsBySeries(event.target.value).subscribe(
      res=>{
        console.log(res);
        this.vostro=res;
        console.log("vostro is checked");
        this.isVostroChecked=!this.isVostroChecked;
      }
    )
}
if(event.target.value=="vostro" && event.target.checked==false){
  this.isVostroChecked=false;
}
  
if(event.target.value=="macpro" && event.target.checked==true){
  this.electronicsListService.getElectronicsBySeries(event.target.value).subscribe(
    res=>{
      console.log(res);
      this.macpro=res;
      console.log("macpro is checked");
      this.isMacProChecked=!this.isMacProChecked;
    }
  )
}
if(event.target.value=="macpro" && event.target.checked==false){
this.isMacProChecked=false;
}

if(event.target.value=="macair" && event.target.checked==true){
  this.electronicsListService.getElectronicsBySeries(event.target.value).subscribe(
    res=>{
      console.log(res);
      this.macair=res;
      console.log("macair is checked");
      this.isMacAirChecked=!this.isMacAirChecked;
    }
  )
}
if(event.target.value=="macair" && event.target.checked==false){
this.isMacAirChecked=false;
}


    if (event.target.value == "Dell" && event.target.checked == true) {
      console.log(event.target.value, "is checked");
      this.isDellChecked = !this.isDellChecked;
    }
    if (event.target.value == "Dell" && event.target.checked == false) {
      console.log(event.target.value, "is unchecked");
      this.isDellChecked = false;
    }
    if (event.target.value == "HP" && event.target.checked == true) {
      console.log(event.target.value, "is checked");
      this.isHpChecked = !this.isHpChecked;
    }
    if (event.target.value == "HP" && event.target.checked == false) {
      console.log(event.target.value, "is unchecked");
      this.isHpChecked = false;
    }
    
    if (event.target.value == "Apple" && event.target.checked == true) {
      console.log(event.target.value, "is checked");
      this.isAppleChecked = !this.isAppleChecked;
    }
    if (event.target.value == "Apple" && event.target.checked == false) {
      console.log(event.target.value, "is unchecked");
      this.isAppleChecked = false;
    }
  }

}

