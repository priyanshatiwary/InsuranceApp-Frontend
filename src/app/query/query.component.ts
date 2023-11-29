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

  // replyToQuery(query: any) {
  //   query.reply = query.adminReply;

  // // Update in the service
  // const updatedData = this.queryData.map((item: { queryId: any; }) =>
  //   item.queryId === query.queryId ? { ...item, reply: query.reply } : item
  // );
  // this.queryService.setQueryData(updatedData);
  // }
  replyToQuery(query: any) {
    query.reply = query.adminReply;

    // Update the specific query in the service
    this.queryService.updateQuery(query).subscribe(() => {
      console.log('Query updated successfully.');
    });
  }
}
