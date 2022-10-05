import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/data.service";
import { ITag, IStop } from "../../shared/stop-data.model";
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'driver-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
  private driverNumber: string;
  data:IStop[] = [];
  
  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute, 
  ) {
    this.driverNumber = this.route.snapshot.paramMap.get("driverNumber")!;
  }

  ngOnInit() {
    this.getAllTagsAndOrganize(+this.driverNumber);
  }

  private getAllTagsAndOrganize(driverNumber: number) {
    this.dataService.getAllTags().subscribe({
      next: (data:ITag[]) => this.dataService.allTags = <ITag[]>data,
      error: (err :string) => console.error(err),
      complete: () => {
        this.data = this.dataService.getOrganizedData(driverNumber);
      }
    })
  }

}
