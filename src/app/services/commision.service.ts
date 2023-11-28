import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommisionService {

  constructor(private http:HttpClient) { }
  getAllCommision(){
    return this.http.get(`https://localhost:7029/api/Commision`);
  }
}
