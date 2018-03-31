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
  electronicsListForm:FormGroup;

  constructor(private electronicsList:ElectronicsListService,private fb:FormBuilder) { }

  ngOnInit() {
    this.electronicsList.getElectronics().subscribe(res=>{
      console.log(res);
      this.electronics=res;
      console.log(this.electronics);
    });
    this.electronicsListForm=this.fb.group({

    })
    
  }

}

