import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SchemeDetailService } from '../services/scheme-detail.service';
@Component({
  selector: 'app-update-scheme-detail',
  templateUrl: './update-scheme-detail.component.html',
  styleUrls: ['./update-scheme-detail.component.css']
})
export class UpdateSchemeDetailComponent {

  updateSchemeDetail=new FormGroup({
    detailId:new FormControl(''),
    schemeImage:new FormControl(''),
    description:new FormControl(''),
    minAmount:new FormControl(''),
    maxAmount:new FormControl(''),
    minInvestmentTime:new FormControl(''),
    maxInvestmentTime:new FormControl(''),
    minAge:new FormControl(''),
    maxAge:new FormControl(''),
    profitRatio:new FormControl(''),
    registrationCommRatio:new FormControl(''),
    installmentCommRatio:new FormControl(''),
    isActive:new FormControl(''),
    schemeId:new FormControl('')
  })
  schemeDetailData:any
  detail:any=[{}]

  constructor( private detailService:SchemeDetailService,private router:Router){
    this.detailService.getAllDetails().subscribe((data)=>{
      this.schemeDetailData=data
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
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        alert("Please provide proper Data");
      }
    });
  }
}
