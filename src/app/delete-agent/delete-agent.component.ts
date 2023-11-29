import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AgentService } from '../services/agent-services.service';
@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent {

  agentIds:any
  selectedAgentId:any
  constructor(
    public dialogRef: MatDialogRef<DeleteAgentComponent>,
    private agentService: AgentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.agentService.getAllAgent().subscribe((data)=>{
      this.agentIds=data
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.agentService.deleteAgent(this.selectedAgentId).subscribe({
      next:(response)=>{
        alert("Agent deleted successfully")
        console.log(response)
        window.location.reload()
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
    })
  }
}