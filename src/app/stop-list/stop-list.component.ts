import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { ITag, IStop } from "../shared/stop-data.model"
import { Router } from '@angular/router';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {

  data:IStop[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllTags();
  }

  private getAllTags() {
    this.dataService.getAllTags().subscribe(
      (data:ITag[]) => this.dataService.allTags = <ITag[]>data,
      (err :string) => console.error(err),
      () => {
        this.data = this.dataService.getOrganizedData();
      }
    )
  }

  // private organizeData() {
  //   for (let order of this.dataService.allTags) {
  //     this.separatedStops.push({
  //       clientInfo: order.sender,
  //       associatedClient: order.recipient,
  //       level: order.level
  //     });
  //     this.separatedStops.push({
  //       clientInfo: order.recipient,
  //       associatedClient: order.sender,
  //       level: order.level
  //     });
  //   }
  // }

  click(index: number) {
    console.log(index);

  }
}
