import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PolicyService } from '../services/policy.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent {
  selectedPolicyId:any
  policyIds:any
  constructor(
    public dialogRef: MatDialogRef<DeletePolicyComponent>,
    private policyService: PolicyService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.policyService.getAllInsurancePolicy().subscribe((data)=>{
      this.policyIds=data
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.policyService.deleteInsurancePolicy(this.selectedPolicyId).subscribe({
      next:(response)=>{
        alert("Policy deleted successfully")
        window.location.reload();
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        alert("Error occur while deleting policy")
        console.log(error)
      }
    })
  }
}
