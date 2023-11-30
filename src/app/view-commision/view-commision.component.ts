import { Component } from '@angular/core';
import { CommisionService } from '../services/commision.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-view-commision',
  templateUrl: './view-commision.component.html',
  styleUrls: ['./view-commision.component.css']
})
export class ViewCommisionComponent {
  commisionData:any
  roleName:any
  constructor(private comService:CommisionService,private data: DataService){
    this.roleName = data.roleName;
    console.log("comm role name",this.roleName)
    this.comService.getAllCommision().subscribe((data)=>{
      this.commisionData=data
    })
  }
  isAdmin(){
    // this.data.roleName=this.roleName
    // console.log("adminRole:",this.roleName)
    if(this.roleName=='Admin')
      return true
    else 
      return false
  }
}
