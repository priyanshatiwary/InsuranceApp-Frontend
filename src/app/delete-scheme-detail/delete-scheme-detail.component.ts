import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchemeDetailService } from '../services/scheme-detail.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-scheme-detail',
  templateUrl: './delete-scheme-detail.component.html',
  styleUrls: ['./delete-scheme-detail.component.css']
})
export class DeleteSchemeDetailComponent {
  selectedDetailId:any
  detailIds:any
  constructor(
    public dialogRef: MatDialogRef<DeleteSchemeDetailComponent>,
    private detailService: SchemeDetailService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.detailService.getAllDetails().subscribe((data)=>{
      this.detailIds=data
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.detailService.deleteDetail(this.selectedDetailId).subscribe({
      next:(response)=>{
        alert("Policy deleted successfully")
        window.location.reload()
        
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        alert("Error occur while deleting scheme detail")
        console.log(error)
      }
    })
  }
}
