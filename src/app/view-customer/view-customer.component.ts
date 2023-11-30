import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CustomerService } from '../services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})

export class ViewCustomerComponent implements OnInit {
  custData: any;
  displayedColumns: string[] = ['customerId', 'firstName', 'lastName', 'email', 'mobileNo', 'state','city', 'nominee','nomineeRelation','agentName','userName','isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private custService: CustomerService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.custService.getAllCustomer().subscribe((data) => {
      this.custData = data;
      console.log('customer Data:', this.custData);
      this.dataSource = new MatTableDataSource<any>(this.custData);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
    console.error('Error fetching customer data:', error);
    });
  }
  






}

