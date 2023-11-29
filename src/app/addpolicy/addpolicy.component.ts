import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent {
  today = new Date();
  addInsurancePolicy = new FormGroup({
    issueDate:new FormControl(''),
    maturityDate:new FormControl(''),
    premiumType:new FormControl(''),
    premiumAmount:new FormControl(''),
    sumAssured:new FormControl(''),
    status:new FormControl(''),
    isActive:new FormControl(''),
    schemeId:new FormControl(''),
    customerId:new FormControl(''),

  })

  schemeList:any
  custList:any

  onDateChange(){  
    var issueDate = this.addInsurancePolicy.controls['issueDate'].value;
    var maturityDate = this.addInsurancePolicy.controls['maturityDate'].value;
    
    if(issueDate != null && maturityDate !=null)
    {
      if (formatDate(issueDate,'yyyy-MM-dd','en_US') > formatDate(maturityDate,'yyyy-MM-dd','en_US')) 
      {
        alert("Maturity date must be greater than issue date");
      }
    }  
  }
  constructor(private insuranceService:PolicyService,private schemeService:InsuranceSchemeService,
    private custService:CustomerService){

    this.schemeService.getAllInsuranceScheme().subscribe((data)=>{
      this.schemeList=data
    })
    this.custService.getAllCustomer().subscribe((data)=>{
      this.custList=data
    })
  }
  addNewInsurancePolicy(data:any){
    data.isActive = data.isActive === 'true';
    console.log("DAta : ",data)
    this.insuranceService.addNewInsurancePolicy(data).subscribe({
      next:(result)=>{
        alert("New Insurance Policy Added Successfully!")
        console.log("REsult",result)
        this.addInsurancePolicy.reset()
        window.location.reload();

      },
      error:(errorResponse:HttpErrorResponse)=>{
        console.log(errorResponse)
        alert("Please enter proper Data")
      }
    })
  }
}
