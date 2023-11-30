import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getAllUser(){
    return this.http.get(`https://localhost:7029/api/User`)
  }
  getUserById(id:any){
    return this.http.get(`https://localhost:7029/api/User/${id}`)
  }
  getAllAgentUser(){
    return this.http.get(`https://localhost:7029/api/User/getAgentUsers`)
  }
  getAllEmpUser(){
    return this.http.get(`https://localhost:7029/api/User/getEmployeeUsers`)
  }
  getAllCustUser(){
    return this.http.get(`https://localhost:7029/api/User/getCustomerUsers`)
  }
}
