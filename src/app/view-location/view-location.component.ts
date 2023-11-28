import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent {
  locationData:any
  constructor(private locService:LocationService){
    this.locService.getAllLocation().subscribe((data)=>{
      this.locationData=data
    })
  }
  
}
