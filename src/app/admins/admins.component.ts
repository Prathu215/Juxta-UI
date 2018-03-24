import { Component, OnInit } from '@angular/core';
import { AdminsService } from './admins.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  adminList:any[];

  constructor(private adminService:AdminsService) { }

  ngOnInit() {
    this.adminService.getAdmins().subscribe(res=>{
      console.log(res);
      this.adminList=res;
      console.log(this.adminList);
    });
  }

}
