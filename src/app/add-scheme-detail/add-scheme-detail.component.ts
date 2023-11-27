import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SchemeDetailService } from '../services/scheme-detail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-scheme-detail',
  templateUrl: './add-scheme-detail.component.html',
  styleUrls: ['./add-scheme-detail.component.css']
})
export class AddSchemeDetailComponent {
  schemeDetailData:any
  addSchemeDetail = new FormGroup({
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
    isActive:new FormControl('')

  })

  constructor( private detailService:SchemeDetailService,private router:Router){}

  addNewSchemeDetail(data: any) {
    this.detailService.addNewDetail(data).subscribe({
      next:(result)=>{
        alert("New Insurance Scheme Added Successfully!")
        console.log("REsult",result)
        this.addSchemeDetail.reset()
      },
      error:(errorResponse:HttpErrorResponse)=>{
        alert("Please put proper data")
        console.log(errorResponse)
      }
    })
  }
}
