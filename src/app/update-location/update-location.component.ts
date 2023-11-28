import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from '../services/location.service';
@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent {

  locform=new FormGroup({
    id:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    city:new FormControl('', Validators.required)
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
        alert("Employee updated successfully")
      }
    })
  }

}
