import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddagentComponent } from '../addagent/addagent.component';
import { UpdateAgentComponent } from '../update-agent/update-agent.component';
import { DeleteAgentComponent } from '../delete-agent/delete-agent.component';
import { AgentService } from '../services/agent-services.service';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit{

  agentData: any;
  displayedColumns: string[] = ['agentId', 'firstName', 'lastName', 'qualification', 'email', 'mobileNo', 'commissionEarned', 'isActive'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 
  roleName:any
  constructor(private agentService: AgentService, private router: Router, private dialog: MatDialog,
    private data: DataService) {
    //debugger
    this.roleName = data.roleName;
    console.log("agent roll name",this.roleName)
    
  }

  ngOnInit(): void {
    this.agentService.getAllAgent().subscribe((data) => {
      this.agentData = data;
      console.log('Agent Data:', this.agentData);
      this.dataSource = new MatTableDataSource<any>(this.agentData);
      this.dataSource.paginator = this.paginator;
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }
  
  isAdmin(){

    if(this.roleName=='Admin')
      return true
    else 
      return false
  }
  openAddAgentDialog() {
    this.dialog.open(AddagentComponent);
  }

  openUpdateAgentDialog() {
    this.dialog.open(UpdateAgentComponent);
  }

  openAgentPlanDialog() {
    this.dialog.open(DeleteAgentComponent);
  }
}
