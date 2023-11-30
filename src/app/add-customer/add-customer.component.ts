import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  customerForm = new FormGroup({
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
  userLists:any
  constructor(private custService: CustomerService, private router: Router,private userService:UserServiceService) { 
    this.userService.getAllCustUser().subscribe((data)=>{
      this.userLists=data
    })
  }

  createEmp(formData: any) {
    console.log(formData)
    formData.isActive = formData.isActive === 'true';
    this.custService.addCustomer(formData).subscribe({
      next:(response)=>{
        alert("Customer added successfully")
      },
      error:(err:HttpErrorResponse)=>{
        alert(`${err.error.Message}`)
        console.log(err)
      }
    })
  }
}
