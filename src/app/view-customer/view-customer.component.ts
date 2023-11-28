import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {
  custData:any

  constructor(private custService:CustomerService,private router: Router, private dialog: MatDialog){
    this.custService.getAllCustomer().subscribe((data)=>{
      this.custData=data
    })
  }
}
