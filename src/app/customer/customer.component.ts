import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  custData:any

  constructor(private custService:CustomerService,private router: Router, private dialog: MatDialog){
    this.custService.getAllCustomer().subscribe((data)=>{
      this.custData=data
    })
  }
}
