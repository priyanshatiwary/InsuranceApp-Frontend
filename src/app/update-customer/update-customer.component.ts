import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  customerForm = new FormGroup({
    customerId: new FormControl('',Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    nominee: new FormControl('', Validators.required),
    nomineeRelation: new FormControl('', Validators.required),
    agentId: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required)
  })

  get customerIdValidator(){
    return this.customerForm.get('customerId')
  }

  get firstNameValidator() {
    return this.customerForm.get('firstName')
  }
  get lastNameValidator() {
    return this.customerForm.get('lastName')
  }
  get emailValidator() {
    return this.customerForm.get('email')
  }
  get mobileNoValidator() {
    return this.customerForm.get('mobileNo')
  }
  get stateValidator() {
    return this.customerForm.get('state')
  }
  get cityValidator() {
    return this.customerForm.get('city')
  }
  get nomineeValidator() {
    return this.customerForm.get('nominee')
  }
  get nomineeRelationValidator() {
    return this.customerForm.get('nomineeRelation')
  }
  get userIdValidator() {
    return this.customerForm.get('userId')
  }
  get agentIdValidator() {
    return this.customerForm.get('agentId')
  }
  get isActiveValidator() {
    return this.customerForm.get('isActive')
  }

  custData:any
  customer:any=[{}]

  constructor(private custService: CustomerService, private router: Router) { 
    this.custService.getAllCustomer().subscribe((data)=>{
      this.custData=data
    })
  }

  getSelectedCustomer(event:any){
    this.custService.getCustomerById(event.target.value).subscribe((data)=>{
      this.customer=data
    })
  }

  updateCustomer(formData: any) {
    console.log(formData)
    formData.isActive = formData.isActive === 'true';
    this.custService.updateCustomer(formData).subscribe({
      next:(response)=>{
        alert("Customer updated successfully")
        window.location.reload();

      },
      error:(err:HttpErrorResponse)=>{
        alert("Error occur while updating customer")
        console.log(err)
      }
    })
  }

}
