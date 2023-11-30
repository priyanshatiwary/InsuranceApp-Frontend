import { Component, OnInit, ViewChild } from '@angular/core';
import { CommisionService } from '../services/commision.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-view-commision',
  templateUrl: './view-commision.component.html',
  styleUrls: ['./view-commision.component.css']
})
export class ViewCommisionComponent implements OnInit{
  commisionData:any
  displayedColumns: string[] = ['id', 'planName', 'agentName', 'customerName', 'commisionAmount', 'isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  roleName:any
  constructor(private comService:CommisionService,private data: DataService){
    this.roleName = data.roleName;
    console.log("comm role name",this.roleName)
    
  }
  ngOnInit(): void {
    this.comService.getAllCommision().subscribe((data) => {
      this.commisionData = data;
      console.log('commision Data:', this.commisionData);
      this.dataSource = new MatTableDataSource<any>(this.commisionData);
      this.dataSource.paginator = this.paginator;
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }
  isAdmin(){
    // this.data.roleName=this.roleName
    // console.log("adminRole:",this.roleName)
    if(this.roleName=='Admin')
      return true
    else 
      return false
  }
}
