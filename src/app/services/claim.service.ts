import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http:HttpClient) { }
  getAllClaim(){
    return this.http.get(`https://localhost:7029/api/Claim/getClaim`);
  }
}
