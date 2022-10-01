import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { ITag, IStop } from "../shared/stop-data.model"


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

  click(index: number) {
    console.log(index);

  }
}
