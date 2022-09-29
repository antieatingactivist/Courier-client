import { Component, OnInit } from '@angular/core';
import { StopComponent } from './stop/stop.component';
import { DataService } from "../shared/data.service";
import { ITag, IStop } from "../shared/stop-data.model"

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
  allTags: ITag[] = [];
  separatedStops:IStop[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllTags();
  }

  private getAllTags() {
    this.dataService.getAllTags().subscribe(
      (data:ITag[]) => this.allTags = <ITag[]>data,
      (err :string) => console.error(err),
      () => {
        console.log(this.allTags)
        this.organizeData();
        console.log(this.separatedStops)
      }
    )
  }

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
