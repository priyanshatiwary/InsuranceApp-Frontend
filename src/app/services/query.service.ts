import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) { }
  getAllQuery(){
    return this.http.get(`https://localhost:7029/api/Query/getQuery`);
  }
}
