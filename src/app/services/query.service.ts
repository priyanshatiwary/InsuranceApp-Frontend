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
   queryData: any[] = [];

   updateQuery(query: any) {
 
    console.log(query)
    
    const updateUrl = `https://localhost:7029/api/Query/updateQuery`;

    // Update the specific query
    return this.http.put(updateUrl, query);
  }
}
