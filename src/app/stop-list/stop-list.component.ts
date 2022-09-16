import { Component, OnInit } from '@angular/core';
import { StopComponent } from './stop/stop.component';
import { StopDataService } from "../shared/stop-data.service";
import { IStop } from "../shared/stop-data.model"

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
  data:any[] = [];
  constructor(private stopData: StopDataService) {}

  ngOnInit(): void {
    this.data = this.getData()
    console.log(this.data);
  }
  getData(): object[] {
    return this.stopData.getData();
    
  }
}
