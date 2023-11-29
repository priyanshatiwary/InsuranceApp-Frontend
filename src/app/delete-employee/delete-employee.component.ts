import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  employeeIds:any
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    private empService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.empService.getAllemployee().subscribe((data)=>{
      this.employeeIds=data
    })
  }

  selectedEmployeeId:any
  
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.empService.deleteEmployee(this.selectedEmployeeId).subscribe({
      next:(response)=>{
        alert("Employee deleted successfully")
        window.location.reload()
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
    })
  }
}
