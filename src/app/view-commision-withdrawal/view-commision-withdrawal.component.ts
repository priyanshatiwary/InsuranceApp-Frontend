import { Component, OnInit, ViewChild } from '@angular/core';
import { CommisionWithdrawalService } from '../services/commision-withdrawal.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-commision-withdrawal',
  templateUrl: './view-commision-withdrawal.component.html',
  styleUrls: ['./view-commision-withdrawal.component.css']
})
export class ViewCommisionWithdrawalComponent implements OnInit {
  commisionData: any;
  displayedColumns: string[] = ['id', 'agentName', 'requestDate', 'withdrawalAmount', 'totalWithdrawalAmount', 'isApproved','isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private comService: CommisionWithdrawalService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.comService.getAllCommisionWithdrawal().subscribe((data) => {
      this.commisionData = data;
      console.log('commision Data:', this.commisionData);
      this.dataSource = new MatTableDataSource<any>(this.commisionData);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
    console.error('Error fetching agent data:', error);
    });
  }
}