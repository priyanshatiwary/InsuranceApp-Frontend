import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { EmployeeService } from '../services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {

 
  editEmpForm = new FormGroup({
    employeeId: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNo: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
    isActive: new FormControl('', Validators.required),
  })
  
  
  get employeeIdValidator(){
    return this.editEmpForm.get('employeeId')
  }
  get firstNameValidator(){
    return this.editEmpForm.get('firstName')
  }
  get lastNameValidator(){
    return this.editEmpForm.get('lastName')
  }
  get emailValidator(){
    return this.editEmpForm.get('email')
  }
  get mobileNoValidator(){
    return this.editEmpForm.get('mobileNo')
  }
  get userIdValidator(){
    return this.editEmpForm.get('userId')
  }
  get salaryValidator(){
    return this.editEmpForm.get('salary')
  }
  get isActiveValidator(){
    return this.editEmpForm.get('isActive')
  }
  

  empData:any
  employee:any=[{}]
  empUserId:any

  constructor(private auth:EmployeeService, private router: Router,private dataService:DataService) { 
    this.auth.getAllemployee().subscribe((data)=>{
      this.empData=data
    })
    this.empUserId=dataService.loggedUserData.userId
    this.auth.getEmployeeById(this.empUserId).subscribe((data)=>{
      this.employee=data
    })
  }
  
  editEmp(formData: any) {
    formData.isActive = formData.isActive === 'true';
    this.auth.updateEmployee(formData).subscribe({
      next:(response)=>{
        alert("Employee updated successfully")
        // window.location.reload();

      },
      error:(err:HttpErrorResponse)=>{
        alert("Please provide proper data ")
        console.log(err)
      }
    })
  }


  
}
