import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from'@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { InsurancePlanService } from '../services/insurance-plan.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddSchemeDetailComponent } from '../add-scheme-detail/add-scheme-detail.component';
@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent {
  insuranceSchemeData:any
  addInsuranceScheme=new FormGroup({
    schemeName:new FormControl('',Validators.required),
    planId:new FormControl('',Validators.required),
    isActive:new FormControl('')
  })

  get schemeNameValidator(){
    return this.addInsuranceScheme.get('schemeName')
  }
  get planIdValidator(){
    return this.addInsuranceScheme.get('planId')
  }
  get isActiveValidator(){
    return this.addInsuranceScheme.get('isActive')
  }
  planList:any
  constructor(private insuranceService : InsuranceSchemeService, private planservice:InsurancePlanService,private router:Router,private dialog:MatDialog){
    this.insuranceService.getAllInsuranceScheme().subscribe((data)=>{
      this.planList=data
    })
  }

  addNewInsuranceScheme(data:any){
    console.log("DAta : ",data)
    data.isActive = data.isActive === 'true';

    this.insuranceService.addNewInsuranceScheme(data).subscribe({
      
      next:(result)=>{
        alert("New Insurance Scheme Added Successfully!")
        console.log("REsult",result)
        this.addInsuranceScheme.reset()
        // window.location.reload();

      },
      error:(errorResponse:HttpErrorResponse)=>{
        alert(`${errorResponse.error.Message}`)
        console.log(errorResponse)
      }
    })
  }
  //navigate to enter scheme details
  navigateToSchemeDetails(){
    this.dialog.open(AddSchemeDetailComponent)
  }
}