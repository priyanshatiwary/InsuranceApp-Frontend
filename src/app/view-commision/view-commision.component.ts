import { Component } from '@angular/core';
import { CommisionService } from '../services/commision.service';

@Component({
  selector: 'app-view-commision',
  templateUrl: './view-commision.component.html',
  styleUrls: ['./view-commision.component.css']
})
export class ViewCommisionComponent {
  commisionData:any
  constructor(private comService:CommisionService){
    this.comService.getAllCommision().subscribe((data)=>{
      this.commisionData=data
    })
  }
}
