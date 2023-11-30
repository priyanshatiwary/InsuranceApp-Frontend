import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PolicyService } from '../services/policy.service';
import { AddpolicyComponent } from '../addpolicy/addpolicy.component';
import { UpdatePolicyComponent } from '../update-policy/update-policy.component';
import { DeletePolicyComponent } from '../delete-policy/delete-policy.component';

@Component({
  selector: 'app-insurance-policy',
  templateUrl: './insurance-policy.component.html',
  styleUrls: ['./insurance-policy.component.css']
})
export class InsurancePolicyComponent implements OnInit {
  insurancePolicyData: any;
  pagedInsurancePolicyData: any;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 20];
  displayedColumns: string[] = [
    'policyNo','issueDate', 'maturityDate','premiumType','premiumAmount','sumAssured','status', 'schemeName','customerName','isActive'
  ];
  dataSource!: MatTableDataSource<any>;
  //@ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private insurancePolicy: PolicyService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  //  this.getAllInsurancePolicy();
 // }
 // getAllInsurancePolicy() {
    this.insurancePolicy.getAllInsurancePolicy().subscribe(
      (data) => {
        this.insurancePolicyData = data;
        this.dataSource = new MatTableDataSource<any>(this.insurancePolicyData);
        this.dataSource.paginator = this.paginator;
     //      this.updatePagedData();
      },
      (error) => {
        console.error(error); // Log the error for debugging
        alert("Problem occurred while fetching data");
      }
    );
  }
  

  openAddInsurancePolicyDialog() {
    const dialogRef = this.dialog.open(AddpolicyComponent);
    console.log("DialogRef:", dialogRef);
  }

  openUpdateInsurancePolicyDialog() {
    this.dialog.open(UpdatePolicyComponent);
  }

  openDeleteInsurancePolicyDialog() {
    this.dialog.open(DeletePolicyComponent);
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedInsurancePolicyData = this.insurancePolicyData.slice(startIndex, endIndex);
  }

  updatePagedData() {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.onPageChange({
      pageIndex: 0,
      pageSize: this.pageSize,
      length: this.insurancePolicyData.length
    });
  }
}