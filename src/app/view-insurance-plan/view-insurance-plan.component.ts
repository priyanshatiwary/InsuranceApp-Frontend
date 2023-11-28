import { Component } from '@angular/core';
import { InsurancePlanService } from '../services/insurance-plan.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-view-insurance-plan',
  templateUrl: './view-insurance-plan.component.html',
  styleUrls: ['./view-insurance-plan.component.css']
})
export class ViewInsurancePlanComponent {
  insurancePlanData:any
  constructor(private insurancePlan:InsurancePlanService,private router:Router,private dialog:MatDialog){
    this.insurancePlan.getAllInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
      console.log(this.insurancePlanData)
    })
  }

  getAllInsurancePlan(){
    this.insurancePlan.getAllInsurancePlan().subscribe((data)=>{
      this.insurancePlanData=data
      next:(res:any)=>{
        
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    })

    
  }
}
