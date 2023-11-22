import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-agent',
  templateUrl: './manage-agent.component.html',
  styleUrls: ['./manage-agent.component.css']
})
export class ManageAgentComponent {

  constructor(private router: Router) {}

  // Add Agent
  addAgent(): void {
    // Implement logic to navigate to the page for adding an agent
    this.router.navigate(['/admin/manage-agent/add']); // Adjust the route as needed
  }

  // Update Agent
  updateAgent(): void {
    // Implement logic to navigate to the page for updating an agent
    this.router.navigate(['/admin/manage-agent/update']); // Adjust the route as needed
  }

  // Delete Agent
  deleteAgent(): void {
    // Implement logic to delete an agent
    console.log('Delete Agent clicked');
    // You might want to show a confirmation dialog or directly send a request to delete the agent
  }

  // View All Agents
  viewAllAgents(): void {
    // Implement logic to navigate to the page for viewing all agents
    this.router.navigate(['/admin/manage-agent/view-all']); // Adjust the route as needed
  }
}



