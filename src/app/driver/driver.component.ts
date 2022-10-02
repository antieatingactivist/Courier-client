import { Component } from '@angular/core';
import { DataService } from "../shared/data.service";

@Component({
  selector: 'driver-root',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  title = 'Courier-client';
  date = this.dataService.getDate();
  constructor(private dataService: DataService) {
    setInterval(() => this.date = this.dataService.getDate(), 1000);
  }
  


}