import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent  {

  electronicsForm:FormGroup;

  deviceType=[
    {id:"0",name:"Touch"},
    {id:"1",name:"Non-Touch"}
  ]

  brandType=[
    {id:0, name:"Lenovo"},
    {id:1,name:"Dell"},
    {id:2, name: "Hp"}

  ]

  deviceModels=[
    {id:0,name:"thinkpad"},
    {id:1,name:"ideapad"},
    {id:2,name:"yoga"}
  ]


  constructor(private fb:FormBuilder) { } 

  ngOnInit(){
this.electronicsForm=this.fb.group({ 
  brandType:'0',
  model:'',
  series:'',
  type:'',
  ram:'',
  hdd:'',
  price:'',
  processor:'',
  screenSize:'',
  batteryPower:'',
  hdmi:'',
  deviceType:'0',
  usbSlots:''


})

  }

  

}
