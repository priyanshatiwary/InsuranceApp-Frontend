import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddagentComponent } from '../addagent/addagent.component';
import { UpdateAgentComponent } from '../update-agent/update-agent.component';
import { DeleteAgentComponent } from '../delete-agent/delete-agent.component';
import { AgentService } from '../services/agent-services.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  agentData: any
  roleName:any
  constructor(private agentService: AgentService, private router: Router, private dialog: MatDialog,
    private data: DataService) {
    //debugger
    this.roleName = data.roleName;
    console.log("agent roll name",this.roleName)
    this.agentService.getAllAgent().subscribe((data) => {
      this.agentData = data;
      console.log("Data", data);

    });
  }
  // editAgent(agent: any) {

  //   const dialogRef = this.dialog.open(UpdateAgentComponent, {
  //     data: agent // Pass the agent data to the dialog
  //   });

  // }
  // deleteAgent(agent: any) {

  // }
  isAdmin(){
    // this.data.roleName=this.roleName
    // console.log("adminRole:",this.roleName)
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
