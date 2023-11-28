import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommisionWithdrawalService {

  constructor(private http:HttpClient) { }
  getAllCommisionWithdrawal(){
    return this.http.get(`https://localhost:7029/api/CommisionWithdrawal`);
  }
}
