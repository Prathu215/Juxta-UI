import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent  { 

  automobilesForm:FormGroup; 
  model:any;
  showForm:boolean; 
  showList:boolean; 
   

  constructor() { } 

  // ngOnInit() {
  //   this.showForm=false;
  //   this.showList=true;
  //   // this.automobilesForm=this.fb.group({
  //   //   firstName:null,
  //   //   lastName:null,
  //   //   email:null,
  //   //   phone:null,
  //   //   password:null
      
  //   // });
  // }

  clearForm(){
    this.automobilesForm.reset();
  }

  
       
       

  }

