import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm:FormGroup;
  constructor(private fb:FormBuilder,private contactUsService:ContactUsService) { }

  ngOnInit() {
    this.contactForm=this.fb.group({
      name:'',
      email:'',
      phone:'',
      comments:''
    })
  }

  saveCustomer(){
    console.log(this.contactForm.value);
    let body=Object.assign({},this.contactForm.value);
    this.contactUsService.saveCustomer(body).subscribe(
      res=>console.log(res));
    this.contactForm.reset();
  }
  
  clearForm(){
    this.contactForm.reset();
  }

}
