import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AgentService } from '../services/agent-services.service';
@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent {
  agentData: any

  constructor(private agentService: AgentService, private router: Router, private dialog: MatDialog) {
    //debugger
    this.agentService.getAllAgent().subscribe((data) => {
      this.agentData = data;
      console.log("Data",data);
    });
  }
}
