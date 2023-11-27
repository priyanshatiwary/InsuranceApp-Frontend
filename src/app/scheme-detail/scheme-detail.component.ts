import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SchemeDetailService } from '../services/scheme-detail.service';
import { AddSchemeDetailComponent } from '../add-scheme-detail/add-scheme-detail.component';
import { UpdateSchemeDetailComponent } from '../update-scheme-detail/update-scheme-detail.component';
import { DeleteSchemeDetailComponent } from '../delete-scheme-detail/delete-scheme-detail.component';
@Component({
  selector: 'app-scheme-detail',
  templateUrl: './scheme-detail.component.html',
  styleUrls: ['./scheme-detail.component.css']
})
export class SchemeDetailComponent {

  detailData:any
  constructor(private detailService:SchemeDetailService,private dialog:MatDialog){
    this.detailService.getAllDetails().subscribe((data)=>{
      this.detailData=data
      console.log(this.detailData)
    })
  }
  getAllDetails(){
    this.detailService.getAllDetails().subscribe((data)=>{
      this.detailData=data
      next:(res:any)=>{  
             
      }
      error:(err:any)=>{
        console.log(err)
        alert("Problem occur while fetching data")
      }
    })
  }
  openAddSchemeDetailDialog(){
    this.dialog.open(AddSchemeDetailComponent)
  }
  openUpdateSchemeDetailDialog(){
    this.dialog.open(UpdateSchemeDetailComponent)
  }
  openDeleteSchemeDetailDialog(){
    this.dialog.open(DeleteSchemeDetailComponent)
  }
}
