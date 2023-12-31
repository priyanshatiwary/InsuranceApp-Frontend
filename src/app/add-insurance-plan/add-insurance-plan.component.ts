import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-insurance-plan',
  templateUrl: './add-insurance-plan.component.html',
  styleUrls: ['./add-insurance-plan.component.css']
})
export class AddInsurancePlanComponent {
  addInsurancePlan = new FormGroup({
    planName:new FormControl('',Validators.required),
    isActive:new FormControl('',Validators.required)
  })
  constructor(private insuranceService:InsurancePlanService,private router:Router){}

  get planNameValidator(){
    return this.addInsurancePlan.get('planName')
  }
  
  addNewInsurancePlan(data:any){
    console.log("DAta : ",data)
    data.isActive = data.isActive === 'true';
    this.insuranceService.addNewInsurancePlan(data).subscribe({
      next:(result)=>{
        alert("New Insurance Scheme Added Successfully!")
        console.log("REsult",result)
        this.addInsurancePlan.reset()
        window.location.reload();

      },
      error:(errorResponse:HttpErrorResponse)=>{
        alert(`${errorResponse.error.Message}`)
        console.log(errorResponse)
      }
    })
  }
}