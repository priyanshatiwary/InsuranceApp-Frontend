import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  locform: FormGroup;
  states: string[] = ['Maharashtra', 'Punjab', 'Gujarat', 'Karnataka']; 
  cities: string[] = 
    ['Mumbai', 'Pune', 'Nagpur','Amritsar', 'Ludhiana', 'Chandigarh','Ahmedabad', 'Surat', 'Vadodara','Bangalore', 'Mysore', 'Hubli']


  constructor(private fb: FormBuilder,private locService:LocationService) {
    this.locform = this.fb.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  get stateValidator() {
    return this.locform.get('state');
  }

  get cityValidator() {
    return this.locform.get('city');
  }


 
  addLoc(formData:any){
    this.locService.addLocation(formData).subscribe({
      next:(response)=>{
        alert("Location added successfully")
        window.location.reload()
        console.log(response)
      },
      error:(err:HttpErrorResponse)=>{
        alert(`${err.error.Message}`)
        console.log(err)
      }
    })
  }
}
