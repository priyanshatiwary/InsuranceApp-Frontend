import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SchemeDetailService } from '../services/scheme-detail.service';
import { AddSchemeDetailComponent } from '../add-scheme-detail/add-scheme-detail.component';
import { UpdateSchemeDetailComponent } from '../update-scheme-detail/update-scheme-detail.component';
import { DeleteSchemeDetailComponent } from '../delete-scheme-detail/delete-scheme-detail.component';

@Component({
  selector: 'app-scheme-detail',
  templateUrl: './scheme-detail.component.html',
  styleUrls: ['./scheme-detail.component.css']
})
export class SchemeDetailComponent implements OnInit {
  detailData: any;
  pagedDetailData: any;
  displayedColumns: string[] = ['detailId', 'schemeImage', 'description', 'minAmount', 'maxAmount', 'minInvestmentTime', 'maxInvestmentTime', 'minAge', 'maxAge', 'profitRatio', 'registrationCommRatio', 'installmentCommRatio', 'schemeName', 'isActive'];
  pageSize: number = 5;
  pageSizeOptions: number[] = [5, 10, 20];
  dataSource!: MatTableDataSource<any>;
  //@ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private detailService: SchemeDetailService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // Do any additional initialization logic if needed
 // }

 
    this.detailService.getAllDetails().subscribe(
      (data) => {
        this.detailData = data;
        this.dataSource = new MatTableDataSource<any>(this.detailData);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
        alert("Problem occurred while fetching data");
      }
    );
  }

  openAddSchemeDetailDialog() {
    this.dialog.open(AddSchemeDetailComponent);
  }

  openUpdateSchemeDetailDialog() {
    this.dialog.open(UpdateSchemeDetailComponent);
  }

  openDeleteSchemeDetailDialog() {
    this.dialog.open(DeleteSchemeDetailComponent);
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedDetailData = this.detailData.slice(startIndex, endIndex);
  }

  updatePagedData() {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.onPageChange({
      pageIndex: 0,
      pageSize: this.pageSize,
      length: this.detailData.length
    });
  }
}