import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-navbar-for-emp',
  templateUrl: './navbar-for-emp.component.html',
  styleUrls: ['./navbar-for-emp.component.css']
})
export class NavbarForEmpComponent {
  constructor(public loginService: LoginService,private router:Router){}
  logout() {
    // Call your logout function from the service
    this.loginService.logoutUser();
    
    this.router.navigate(['/home'])
    // Additional code or redirection after logout can be added here
  }

  
}
