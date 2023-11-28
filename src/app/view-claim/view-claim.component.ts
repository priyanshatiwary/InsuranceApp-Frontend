import { Component } from '@angular/core';
import { ClaimService } from '../services/claim.service';
@Component({
  selector: 'app-view-claim',
  templateUrl: './view-claim.component.html',
  styleUrls: ['./view-claim.component.css']
})
export class ViewClaimComponent {
  claimData:any
  constructor(private claimService:ClaimService){
    this.claimService.getAllClaim().subscribe((data)=>{
      this.claimData=data
    })
  }
}
