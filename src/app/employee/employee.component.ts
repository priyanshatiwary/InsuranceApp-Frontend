import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AgentComponent } from '../agent/agent.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  employeeName: any;
  empId:any

  constructor(private data: DataService, private router: Router) {
    this.employeeName = data.userName;
    
  }
  ngOnInit():void{
    var token = localStorage.getItem('token')
    console.log("token in admin ts",token)
    var role = localStorage.getItem('role')
    console.log("role in admin ts",role)
    if(token==null){
      alert("Please Login")
      this.router.navigateByUrl('/login')
    }
    else if(role!='Employee'){
      alert("Please login as Employee")
      this.router.navigateByUrl('/login')
    }


  }
  navigateTo(route: string): void {
    this.router.navigate([`/employee/${route}`]);
  }
  openCustomer(){
    this.router.navigateByUrl('/customer');
  }
  openviewCommission(){
    this.router.navigateByUrl('/view-commision')
  }
}

  

/*
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeName:any
  constructor(private data:DataService){
    this.employeeName= data.userName
  }

}
*/