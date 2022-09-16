import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IStop } from "./shared/stop-data.model";
import { StopDataService } from "./shared/stop-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier-client';
  data:any = []
  parsedData:string = "";
  constructor(private http: HttpClient, private stopData: StopDataService) {}
  
  getData() {
    console.log(this.stopData.getData());
  }

}