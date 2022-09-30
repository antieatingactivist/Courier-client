import { Component } from '@angular/core';
import { ITag } from "./shared/stop-data.model";
import { DataService } from "./shared/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier-client';
  date = this.dataService.getDate();
  constructor(private dataService: DataService) {
    setInterval(() => this.date = this.dataService.getDate(), 1000);
  }
  


}