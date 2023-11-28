import { Component } from '@angular/core';

import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent {
  payData:any
  constructor(private payService:PaymentService){
    this.payService.getAllPayment().subscribe((data)=>{
      this.payData=data
    })
  }

}
