import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurancePlanComponent } from '../insurance-plan/insurance-plan.component';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-delete-insurance-plan',
  templateUrl: './delete-insurance-plan.component.html',
  styleUrls: ['./delete-insurance-plan.component.css']
})
export class DeleteInsurancePlanComponent {
  deleteInsurancePlan= new FormGroup({
    planId:new FormControl('',Validators.required),
    planName:new FormControl('',Validators.required)
  })
  get planIdValid(){
    return this.deleteInsurancePlan.get('planId')
  }
  get planNameValid(){
    return this.deleteInsurancePlan.get('planName')
  }
   insurancePlanData:any
   plan:any=[{}]
  constructor(private insuranceService:InsurancePlanService,private router:Router){
    insuranceService.getAllInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
    })
  }
  getSelectedPlan(event:any){
    this.insuranceService.getInsurancePlanById(event.target.value).subscribe((data)=>{
      this.plan=data
      console.log("schemeId",this.plan)
    })
  }

  deleteInsurancePlanData(data:any){
    this.insuranceService.deleteInsurancePlan(data.planId).subscribe({
      next:(result)=>{
        alert("Insurance plan deleted Successfully")
        console.log(result)
        this.deleteInsurancePlan.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
      }
    })
  }
}