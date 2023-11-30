import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddInsuranceSchemeComponent } from '../add-insurance-scheme/add-insurance-scheme.component';
import { UpdateInsuranceSchemeComponent } from '../update-insurance-scheme/update-insurance-scheme.component';
import { DeleteInsuranceSchemeComponent } from '../delete-insurance-scheme/delete-insurance-scheme.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-insurance-scheme',
  templateUrl: './insurance-scheme.component.html',
  styleUrls: ['./insurance-scheme.component.css']
})

export class InsuranceSchemeComponent implements OnInit {
  schemeData: any;
  title='Welcome to Insurance scheme detail'
  insuranceData:any;
  planList:any
  displayedColumns: string[] = ['schemeId', 'schemeName', 'planName', 'isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private insuranceSchemeService:InsuranceSchemeService,private dialog: MatDialog,private router:Router) {}

  ngOnInit(): void {
    this.insuranceSchemeService.getAllInsuranceScheme().subscribe((data) => {
      this.schemeData = data;
      console.log('Employee Data:', this.schemeData);
      this.dataSource = new MatTableDataSource<any>(this.schemeData);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
    console.error('Error fetching agent data:', error);
    });
  }
  

  openAddInsuranceSchemeDialog(){
    this.dialog.open(AddInsuranceSchemeComponent)
  }
  openUpdateInsuranceSchemeDialog(){
    this.dialog.open(UpdateInsuranceSchemeComponent)
  }

  openDeleteInsuranceSchemeDialog(){
    this.dialog.open(DeleteInsuranceSchemeComponent)
  }
}