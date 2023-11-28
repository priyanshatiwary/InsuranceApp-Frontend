import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomer(){
    return this.http.get(`https://localhost:7029/api/Customer`);
  }

  getCustomerById(id:any){
    return this.http.get(`https://localhost:7029/api/Customer/getCustomerById${id}`)
  }

  addCustomer(data:any){
    return this.http.post(`https://localhost:7029/api/Customer/addCustomer`,data)
  }
  updateCustomer(data:any){
    return this.http.put(`https://localhost:7029/api/Customer/updateCustomer`,data)
  }

  deleteCustomer(id:any){
    return this.http.delete(`https://localhost:7029/api/Customer/deleteCustomer${id}`)
  }
}
