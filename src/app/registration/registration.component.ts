import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  model:any;
  showForm:boolean; 
  showList:boolean; 
  adminList:any[];  

  constructor(private fb: FormBuilder,private registrationService:RegistrationService) { } 

  ngOnInit() {
    this.showForm=false;
    this.showList=true;
    this.registrationForm=this.fb.group({
      firstName:null,
      lastName:null,
      email:null,
      phone:null,
      password:null
      
    });
  }

  clearForm(){
    this.registrationForm.reset();
  }

  saveRegistrationData(){
    console.log(this.registrationForm.value, "from angular");
    let body=Object.assign({},this.registrationForm.value);
    console.log(body, "-------printing body");
   this.registrationService.addAdmins(body).subscribe(
     res=>{
       console.log(res, "from response");
       this.registrationService.getAdmins().subscribe(
         res=>{
           console.log(res);
           this.adminList=res;
           console.log(this.adminList);
          }
       );
       
       this.showForm=!this.showForm;
       this.showList=!this.showList;
       
     });

  }

}
