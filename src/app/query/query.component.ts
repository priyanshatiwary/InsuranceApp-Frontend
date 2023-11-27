import { Component } from '@angular/core';
import { QueryService } from '../services/query.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  queryData:any
  constructor(private queryService:QueryService,private dialog: MatDialog){
    this.queryService.getAllQuery().subscribe((data)=>{
      this.queryData=data
    })
  }

}
