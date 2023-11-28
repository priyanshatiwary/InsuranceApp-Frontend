import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
  getAllPayment(){
    return this.http.get(`https://localhost:7029/api/Payment/getPayment`);
  }
}
