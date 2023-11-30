import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddInsurancePlanComponent } from '../add-insurance-plan/add-insurance-plan.component';
import { UpdateInsurancePlanComponent } from '../update-insurance-plan/update-insurance-plan.component';
import { DeleteInsurancePlanComponent } from '../delete-insurance-plan/delete-insurance-plan.component';
import { InsurancePlanService } from '../services/insurance-plan.service';

@Component({
  selector: 'app-insurance-plan',
  templateUrl: './insurance-plan.component.html',
  styleUrls: ['./insurance-plan.component.css']
})
export class InsurancePlanComponent implements OnInit{
  insurancePlanData: any;
  displayedColumns: string[] = ['planId', 'planName', 'isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private insurancePlanService: InsurancePlanService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.insurancePlanService.getAllInsurancePlan().subscribe(
      (data) => {
        this.insurancePlanData = data;
        console.log('Insurance Plan Data:', this.insurancePlanData);
        this.dataSource = new MatTableDataSource<any>(this.insurancePlanData);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching insurance plan data:', error);
      }
    );
  }

  openAddInsurancePlanDialog() {
    this.dialog.open(AddInsurancePlanComponent);
  }

  openUpdateInsurancePlanDialog() {
    this.dialog.open(UpdateInsurancePlanComponent);
  }

  openDeleteInsurancePlanDialog() {
    this.dialog.open(DeleteInsurancePlanComponent);
  }
}
