import { Component ,OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminName: any;
  roleName:any
  constructor(private data: DataService, private router: Router) {
    this.adminName = data.userName;
    this.roleName = data.roleName;
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
    else if(role!='Admin'){
      alert("Please login as Admin")
      this.router.navigateByUrl('/login')
    }


  }
  
  getRoleName(){
    
    if(this.roleName=='Admin')
      return true
    else 
      return false
  }
  
  navigateTo(route: string): void {
    this.router.navigate([`/admin/${route}`]);
  }
  openPolicy(){
    this.router.navigateByUrl('/insurance-policy')
  }
  openSchemeDetail(){
    this.router.navigateByUrl('/scheme-detail');
  }

  openCustomerDetail(){
    this.router.navigateByUrl('/view-customer');
  }

  openQueryDetail(){
    this.router.navigateByUrl('/query');
  }

  openPaymentDetail(){
    this.router.navigateByUrl('/view-payments');
  }
  openClaimDetail(){
    this.router.navigateByUrl('/view-claim');
  }
  
}



