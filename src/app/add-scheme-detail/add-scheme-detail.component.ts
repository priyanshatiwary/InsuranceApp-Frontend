import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SchemeDetailService } from '../services/scheme-detail.service';
import { Router } from '@angular/router';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
@Component({
  selector: 'app-add-scheme-detail',
  templateUrl: './add-scheme-detail.component.html',
  styleUrls: ['./add-scheme-detail.component.css']
})
export class AddSchemeDetailComponent {
  schemeDetailData:any
  addSchemeDetail = new FormGroup({
    schemeImage:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    minAmount:new FormControl('',Validators.required),
    maxAmount:new FormControl('',Validators.required),
    minInvestmentTime:new FormControl('',Validators.required),
    maxInvestmentTime:new FormControl('',Validators.required),
    minAge:new FormControl('',Validators.required),
    maxAge:new FormControl('',Validators.required),
    profitRatio:new FormControl('',Validators.required),
    registrationCommRatio:new FormControl('',Validators.required),
    installmentCommRatio:new FormControl('',Validators.required),
    isActive:new FormControl('',Validators.required),
    schemeId:new FormControl('',Validators.required),
    schemeName:new FormControl('',Validators.required)

  })

  get schemeImageValid(){
    return this.addSchemeDetail.get('schemeImage')
  }
  get descriptionValid(){
    return this.addSchemeDetail.get('description')
  }
  get minAmountValid(){
    return this.addSchemeDetail.get('minAmount')
  }
  get maxAmountValid(){
    return this.addSchemeDetail.get('maxAmount')
  }
  get minInvestmentTimeValid(){
    return this.addSchemeDetail.get('minInvestmentTime')
  }
  get maxInvestmentTimeValid(){
    return this.addSchemeDetail.get('maxInvestmentTime')
  }
  get minAgeValid(){
    return this.addSchemeDetail.get('minAge')
  }
  get maxAgeValid(){
    return this.addSchemeDetail.get('maxAge')
  }
  get profitRatioValid(){
    return this.addSchemeDetail.get('profitRatio')
  }
  get registrationCommRatioValid(){
    return this.addSchemeDetail.get('registrationCommRatio')
  }
  get installmentCommRatioValid(){
    return this.addSchemeDetail.get('installmentCommRatio')
  }
  get isActiveValid(){
    return this.addSchemeDetail.get('isActive')
  }
  get schemeIdValid(){
    return this.addSchemeDetail.get('schemeId')
  }
  get schemeNameValid(){
    return this.addSchemeDetail.get('schemeName')
  }


  schemeList:any
  constructor( private detailService:SchemeDetailService,private router:Router,
    private schemeService:InsuranceSchemeService){
      this.schemeService.getAllInsuranceScheme().subscribe((data)=>{
        this.schemeList=data
      })
    }

  addNewSchemeDetail(data: any) {
    data.isActive = data.isActive === 'true';

    this.detailService.addNewDetail(data).subscribe({
      next:(result)=>{
        alert("New Insurance Scheme Added Successfully!")
        console.log("REsult",result)
        this.addSchemeDetail.reset()
        window.location.reload()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        alert(`${errorResponse.error.Message}`)
        console.log(errorResponse)
      }
    })
  }
}
