import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SchemeDetailService {

  constructor(private http:HttpClient) { }

  getAllDetails(){
    return this.http.get(`https://localhost:7029/api/SchemeDetail`);
  }
  getAllDetailById(id:any){
    return this.http.get(`https://localhost:7029/api/SchemeDetail/getSchemeById${id}`)
  }
  addNewDetail(data:any){
    return this.http.post(`https://localhost:7029/api/SchemeDetail/addScheme`,data)
  }
  updateDetail(data:any){
    return this.http.put(`https://localhost:7029/api/SchemeDetail/updateScheme`,data)
  }
  deleteDetail(id:any){
    return this.http.delete(`https://localhost:7029/api/SchemeDetail/deleteScheme${id}`)
  }
}
