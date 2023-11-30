import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PolicyService } from '../services/policy.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent {
  today = new Date();
    
  updateInsurancePolicy= new FormGroup({
    policyNo:new FormControl(''),
    issueDate:new FormControl('', Validators.required),
    maturityDate:new FormControl('', Validators.required),
    premiumType:new FormControl('', Validators.required),
    premiumAmount:new FormControl('', Validators.required),
    sumAssured:new FormControl('', Validators.required),
    status:new FormControl('', Validators.required),
    isActive:new FormControl('', Validators.required),
    schemeId:new FormControl('', Validators.required),
    customerId:new FormControl('', Validators.required),
 
  });
  get issueDateValid(){
    return this.updateInsurancePolicy.get('issueDate')
  }
  get maturityDateValid(){
    return this.updateInsurancePolicy.get('maturityDate')
  }
  get premiumTypeValid(){
    return this.updateInsurancePolicy.get('premiumType')
  }
  get premiumAmountValid(){
    return this.updateInsurancePolicy.get('premiumAmount')
  }
  get sumAssuredValid(){
    return this.updateInsurancePolicy.get('sumAssured')
  }
  get statusValid(){
    return this.updateInsurancePolicy.get('status')
  }
  get isActiveValid(){
    return this.updateInsurancePolicy.get('isActive')
  }
  get schemeIdValid(){
    return this.updateInsurancePolicy.get('schemeId')
  }
  get customerIdValid(){
    return this.updateInsurancePolicy.get('customerId')
  }
  onDateChange(){  
    var issueDate = this.updateInsurancePolicy.controls['issueDate'].value;
    var maturityDate = this.updateInsurancePolicy.controls['maturityDate'].value;
    
    if(issueDate != null && maturityDate !=null)
    {
      if (formatDate(issueDate,'yyyy-MM-dd','en_US') > formatDate(maturityDate,'yyyy-MM-dd','en_US')) 
      {
        alert("Maturity date must be greater than issue date");
      }
    }  
  }
  schemeList:any
  custList:any

  insurancePolicyData:any
   policy:any=[{}]
  constructor(private insuranceService:PolicyService,private schemeService:InsuranceSchemeService,
    private custService:CustomerService){
    this.insuranceService.getAllInsurancePolicy().subscribe((data)=>{
      this.insurancePolicyData=data
    })
    this.schemeService.getAllInsuranceScheme().subscribe((data)=>{
      this.schemeList=data
    })
    this.custService.getAllCustomer().subscribe((data)=>{
      this.custList=data
    })
  }

  getSelectedPolicy(event:any){
    this.insuranceService.getInsurancePolicyById(event.target.value).subscribe((data)=>{
      this.policy=data
      
    })
  }

  updateInsurancePolicyData(data: any) {
    data.isActive = data.isActive === 'true';
    this.insuranceService.updateInsurancePolicy(data).subscribe({
      next: (result) => {
        alert("Insurance policy updated Successfully");
        console.log(result);
        this.updateInsurancePolicy.reset();
        window.location.reload();

      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        alert("Please put proper Data");
      }
    });
  }
}
