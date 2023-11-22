// manage-employee.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent {

  constructor(private router: Router) {}

  // Add Employee
  addEmployee(): void {
    // Implement logic to navigate to the page for adding an employee
    this.router.navigate(['/admin/manage-employee/add']); // Adjust the route as needed
  }

  // Update Employee
  updateEmployee(): void {
    // Implement logic to navigate to the page for updating an employee
    this.router.navigate(['/admin/manage-employee/update']); // Adjust the route as needed
  }

  // Delete Employee
  deleteEmployee(): void {
    // Implement logic to delete an employee
    console.log('Delete Employee clicked');
    // You might want to show a confirmation dialog or directly send a request to delete the employee
  }

  // View All Employees
  viewAllEmployees(): void {
    // Implement logic to navigate to the page for viewing all employees
    this.router.navigate(['/admin/manage-employee/view-all']); // Adjust the route as needed
  }
}
