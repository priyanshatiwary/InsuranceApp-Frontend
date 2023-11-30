import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SchemeDetailService } from '../services/scheme-detail.service';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
@Component({
  selector: 'app-update-scheme-detail',
  templateUrl: './update-scheme-detail.component.html',
  styleUrls: ['./update-scheme-detail.component.css']
})
export class UpdateSchemeDetailComponent {

  updateSchemeDetail=new FormGroup({
    detailId:new FormControl(''),
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
    return this.updateSchemeDetail.get('schemeImage')
  }
  get descriptionValid(){
    return this.updateSchemeDetail.get('description')
  }
  get minAmountValid(){
    return this.updateSchemeDetail.get('minAmount')
  }
  get maxAmountValid(){
    return this.updateSchemeDetail.get('maxAmount')
  }
  get minInvestmentTimeValid(){
    return this.updateSchemeDetail.get('minInvestmentTime')
  }
  get maxInvestmentTimeValid(){
    return this.updateSchemeDetail.get('maxInvestmentTime')
  }
  get minAgeValid(){
    return this.updateSchemeDetail.get('minAge')
  }
  get maxAgeValid(){
    return this.updateSchemeDetail.get('maxAge')
  }
  get profitRatioValid(){
    return this.updateSchemeDetail.get('profitRatio')
  }
  get registrationCommRatioValid(){
    return this.updateSchemeDetail.get('registrationCommRatio')
  }
  get installmentCommRatioValid(){
    return this.updateSchemeDetail.get('installmentCommRatio')
  }
  get isActiveValid(){
    return this.updateSchemeDetail.get('isActive')
  }
  get schemeIdValid(){
    return this.updateSchemeDetail.get('schemeId')
  }
  get schemeNameValid(){
    return this.updateSchemeDetail.get('schemeName')
  }
  schemeDetailData:any
  detail:any=[{}]
  schemeList:any
  constructor( private detailService:SchemeDetailService,private router:Router,
    private schemeService:InsuranceSchemeService){
    this.detailService.getAllDetails().subscribe((data)=>{
      this.schemeDetailData=data
    })
    this.schemeService.getAllInsuranceScheme().subscribe((data)=>{
      this.schemeList=data
    })
  }
  getSelectedDetail(event:any){
    this.detailService.getAllDetailById(event.target.value).subscribe((data)=>{
      this.detail=data
    })
  }
  updateSchemeDetailData(data:any){
    data.isActive = data.isActive === 'true';
    this.detailService.updateDetail(data).subscribe({
      next: (result) => {
        alert("Insurance policy updated Successfully");
        console.log(result);
        this.updateSchemeDetail.reset();
        window.location.reload();

      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        alert("Please provide proper Data");
      }
    });
  }
}
