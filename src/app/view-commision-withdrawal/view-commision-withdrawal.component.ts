import { Component } from '@angular/core';
import { CommisionWithdrawalService } from '../services/commision-withdrawal.service';

@Component({
  selector: 'app-view-commision-withdrawal',
  templateUrl: './view-commision-withdrawal.component.html',
  styleUrls: ['./view-commision-withdrawal.component.css']
})
export class ViewCommisionWithdrawalComponent {
  commisionData:any
  constructor(private comService:CommisionWithdrawalService){
    this.comService.getAllCommisionWithdrawal().subscribe((data)=>{
      this.commisionData=data
    })
  }
}
