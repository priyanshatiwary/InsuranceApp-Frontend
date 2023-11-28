import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { UpdateInsurancePlanComponent } from '../update-insurance-plan/update-insurance-plan.component';
import { UpdateInsuranceSchemeComponent } from '../update-insurance-scheme/update-insurance-scheme.component';
import { UpdateAgentComponent } from '../update-agent/update-agent.component';
import { UpdateLocationComponent } from '../update-location/update-location.component';
import { AddLocationComponent } from '../add-location/add-location.component';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(public loginService: LoginService,private router:Router,private dialog: MatDialog){}
  logout() {
    // Call logout function from the service
    this.loginService.logoutUser();
    
    this.router.navigate(['/home'])
    // Additional code or redirection after logout can be added here
  }
  openUpdateInsurancePlanDialog() {
    const dialogRef = this.dialog.open(UpdateInsurancePlanComponent, {
      width: '600px', 
      data: {
        // Add any data you want to pass to the dialog
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result after the dialog is closed (if needed)
      console.log('The dialog was closed', result);
    });
  }

  openUpdateInsuranceSchemeDialog(){
    const dialogRef = this.dialog.open(UpdateInsuranceSchemeComponent,{
      width:'500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result after the dialog is closed (if needed)
      console.log('The dialog was closed', result);
    });
  }

  openUpdateAgentDialog(){
    const dialogRef=this.dialog.open(UpdateAgentComponent,{
      width:'400px'
    });
  }

  openAddLocationDialog(){
    const dialogRef = this.dialog.open(AddLocationComponent,{
      width:'400px'
    })
  }
  

}
