import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { LocationService } from '../services/location.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UpdateLocationComponent } from '../update-location/update-location.component';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {
  locationData: any; // Your actual data array
  pagedLocationData: any[] = [];
  totalItems: number = 0;
  pageSize: number = 5; // Set your default page size

  constructor(private locService: LocationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.locService.getAllLocation().subscribe((data) => {
      this.locationData = data;
      this.totalItems = this.locationData.length;
      this.updatePagedData();
    });
  }

  onPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedLocationData = this.locationData.slice(startIndex, endIndex);
  }

  updatePagedData(): void {
    // Call this method whenever your data changes to update pagination
    this.totalItems = this.locationData.length;
    this.pagedLocationData = this.locationData.slice(0, this.pageSize);
  }

  openEditDialog() {
    this.dialog.open(UpdateLocationComponent);
  }

  deleteLocation(locId: any) {
    this.locService.deleteLocation(locId).subscribe({
      next: (res) => {
        alert("Location Deleted Successfully");
        window.location.reload();
      },
      error: (err: HttpErrorResponse) => {
        alert("Unable to Delete Location");
      }
    });
  }
}
