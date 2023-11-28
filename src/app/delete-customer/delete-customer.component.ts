import { Component ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from '../services/customer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent {
  customerId: any;
  constructor(
    public dialogRef: MatDialogRef<DeleteCustomerComponent>,
    private custService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.custService.deleteCustomer(this.customerId).subscribe({
      next:(response)=>{
        alert("Customer deleted successfully")
        console.log(response)
      },
      error:(error:HttpErrorResponse)=>{
        alert("Error occur while deleting customer")
        console.log(error)
      }
    })
  }
}
