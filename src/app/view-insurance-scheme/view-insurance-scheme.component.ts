import { Component } from '@angular/core';
import { InsuranceSchemeService } from '../services/insurance-scheme.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-view-insurance-scheme',
  templateUrl: './view-insurance-scheme.component.html',
  styleUrls: ['./view-insurance-scheme.component.css']
})
export class ViewInsuranceSchemeComponent {
  insuranceData:any;
  constructor(private insuranceService : InsuranceSchemeService, private router:Router,private dialog:MatDialog){
    insuranceService.getAllInsuranceScheme().subscribe((data)=>{
      this.insuranceData=data
      console.log("InsuranceData:",this.insuranceData)
    })
  }

  getAllInsuranceScheme(){
    this.insuranceService.getAllInsuranceScheme().subscribe((data)=>{
      this.insuranceData=data
      next:(res:any)=>{
        console.log(res)
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    })
  }
}
