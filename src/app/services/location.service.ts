import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  getAllLocation(){
    return this.http.get(`https://localhost:7029/api/Location/getAllLocation`)
  }
  getLocationById(id:any){
    return this.http.get(`https://localhost:7029/api/Location/getLocationById${id}`)
  }
  addLocation(data:any){
    return this.http.post(`https://localhost:7029/api/Location/addNewLocation`,data)
  }
  updateLocation(data:any){
    return this.http.put(`https://localhost:7029/api/Location/updateLocation`,data)
  }
  deleteLocation(id:any){
    return this.http.delete(`https://localhost:7029/api/Location/deleteLocationById${id}`)
  }
}
