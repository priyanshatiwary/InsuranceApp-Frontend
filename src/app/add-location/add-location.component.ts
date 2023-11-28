import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  locform=new FormGroup({
    state:new FormControl('', Validators.required),
    city:new FormControl('', Validators.required)
  })



  get stateValidator(){
    return this.locform.get('state')
  }

  get cityValidator(){
    return this.locform.get('city')
  }
 

  constructor(private locService:LocationService){
  }
  
 
  addLoc(formData:any){
    this.locService.addLocation(formData).subscribe({
      next:(response)=>{
        alert("Location added successfully")
      }
    })
  }
}
