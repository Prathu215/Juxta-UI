import { Component, OnInit } from '@angular/core';
import { ElectronicsListService } from './electronics-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-electronics-list',
  templateUrl: './electronics-list.component.html',
  styleUrls: ['./electronics-list.component.css']
})
export class ElectronicsListComponent implements OnInit {

  electronics:any[];
  isElectronicsExists:boolean=true;
  dell:any[]=[];
  hp:any[]=[];
  electronicsListForm:FormGroup;

  constructor(private electronicsList:ElectronicsListService,private fb:FormBuilder) { }

  ngOnInit() {
    this.electronicsList.getElectronics().subscribe(res=>{
      console.log(res);
      this.electronics=res;
      for(let i=0;i<this.electronics.length;i++){
        console.log(res[i].brand);
        if(res[i].brand=="dell"){
            console.log(res[i],"printing dell");
            this.dell.push(res[i]);
        }
        if(res[i].brand=="hp"){
          console.log(res[i],"printing hp");
          this.hp.push(res[i]);
      }
        
      
      }
      console.log(this.dell,"dell array");
      console.log(this.hp,"printing hp");
      if(this.electronics==null){
        this.isElectronicsExists=!this.isElectronicsExists;
      }
      console.log(this.electronics);
    },
  err=>alert("server not running"));
    this.electronicsListForm=this.fb.group({

    })
    
  }

}

