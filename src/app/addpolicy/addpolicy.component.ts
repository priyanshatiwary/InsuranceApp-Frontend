import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    issueDate:new FormControl('', Validators.required),
    maturityDate:new FormControl('', Validators.required),
    premiumType:new FormControl('', Validators.required),
    premiumAmount:new FormControl('', Validators.required),
    sumAssured:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required),
    isActive:new FormControl('', Validators.required),
    schemeId:new FormControl('', Validators.required),
    customerId:new FormControl('', Validators.required),

  })

  get issueDateValid(){
    return this.addInsurancePolicy.get('issueDate')
  }
  get maturityDateValid(){
    return this.addInsurancePolicy.get('maturityDate')
  }
  get premiumTypeValid(){
    return this.addInsurancePolicy.get('premiumType')
  }
  get premiumAmountValid(){
    return this.addInsurancePolicy.get('premiumAmount')
  }
  get sumAssuredValid(){
    return this.addInsurancePolicy.get('sumAssured')
  }
  get statusValid(){
    return this.addInsurancePolicy.get('status')
  }
  get isActiveValid(){
    return this.addInsurancePolicy.get('isActive')
  }
  get schemeIdValid(){
    return this.addInsurancePolicy.get('schemeId')
  }
  get customerIdValid(){
    return this.addInsurancePolicy.get('customerId')
  }

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
