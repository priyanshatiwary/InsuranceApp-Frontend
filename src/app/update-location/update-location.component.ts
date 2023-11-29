import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../services/location.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent {

  states: string[] = ['Maharashtra', 'Punjab', 'Gujarat', 'Karnataka']; 
  cities: string[] = 
    ['Mumbai', 'Pune', 'Nagpur','Amritsar', 'Ludhiana', 'Chandigarh','Ahmedabad', 'Surat', 'Vadodara','Bangalore', 'Mysore', 'Hubli']

  locform=new FormGroup({
    id:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    city:new FormControl('', Validators.required),
    isActive:new FormControl('',Validators.requiredTrue)
  })

  get locationIdValidator(){
    return this.locform.get('id')
  }

  get stateValidator(){
    return this.locform.get('state')
  }

  get cityValidator(){
    return this.locform.get('city')
  }
  get isActiveValidator(){
    return this.locform.get('isActive')
  }
  locData:any
  location:any=[{}]

  constructor(private locService:LocationService){
    this.locService.getAllLocation().subscribe((data)=>{
      this.locData=data
    })
  }
  
  getSelectedLocation(event:any){
    this.locService.getLocationById(event.target.value).subscribe((data)=>{
      this.location=data
    })
  }
  editLoc(formData:any){
    this.locService.updateLocation(formData).subscribe({
      next:(response)=>{
        alert("Location updated successfully")
        window.location.reload();

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err)
        alert("Please provide proper data")
      }
    })
  }

}
