import { Component, OnInit, ViewChild } from '@angular/core';

import { PaymentService } from '../services/payment.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})

export class ViewPaymentComponent implements OnInit {
  payData: any;
  displayedColumns: string[] = ['paymentId', 'paymentType', 'amount', 'date', 'tax', 'totalPayment','customerName', 'isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private payService: PaymentService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.payService.getAllPayment().subscribe((data) => {
      this.payData = data;
      console.log('Payment Data:', this.payData);
      this.dataSource = new MatTableDataSource<any>(this.payData);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
    console.error('Error fetching Payment data:', error);
    });
  }
}

