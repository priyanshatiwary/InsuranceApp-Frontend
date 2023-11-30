import { Component, OnInit, ViewChild } from '@angular/core';
import { ClaimService } from '../services/claim.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-view-claim',
  templateUrl: './view-claim.component.html',
  styleUrls: ['./view-claim.component.css']
})

export class ViewClaimComponent implements OnInit {
  claimData: any;
  displayedColumns: string[] = ['claimId', 'claimAmount', 'bankAccountNumber', 'bankIfscCode', 'date', 'status','policyNo', 'customerName','isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private claimService: ClaimService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.claimService.getAllClaim().subscribe((data) => {
      this.claimData = data;
      console.log('customer Data:', this.claimData);
      this.dataSource = new MatTableDataSource<any>(this.claimData);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
    console.error('Error fetching claim data:', error);
    });
  }
}
