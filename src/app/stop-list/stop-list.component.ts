import { Component, OnInit } from '@angular/core';
import { StopComponent } from './stop/stop.component';
import { DataService } from "../shared/data.service";
import { IStop } from "../shared/stop-data.model"

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
  allTags: any[] = [];
  separatedStops:any[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllTags().subscribe(
      (data:any[]) => this.allTags = data,
      (err :any) => console.error(err),
      () => {
        console.log(this.allTags)
        this.organizeData();
        console.log(this.separatedStops)
      }
    )
  }

  // ngOnInit(): void {
  //   this.data = this.getData();
  //   this.organizeData();
  //   console.log(this.data);
  // }
  // private getData(): object[] {
  //   return this.stopData.getData();   
  // }
  private organizeData(): void {
    for (let order of this.allTags) {
      this.separatedStops.push({
        clientInfo: order.sender,
        associatedClient: order.recipient,
        level: order.level
      });
      this.separatedStops.push({
        clientInfo: order.recipient,
        associatedClient: order.sender,
        level: order.level
      });
    }
  }
}
