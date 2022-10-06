import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from "../../shared/data.service";
import { ITag, IStop, IOptions } from "../../shared/stop-data.model";
import { ActivatedRoute } from '@angular/router';



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

  changeOptions(event: any) {
    for (let key in event) {
      this.dataService.options[key as keyof IOptions] = event[key as keyof IOptions];
    }
    this.getAllTagsAndOrganize(+this.driverNumber);
  }


  private getAllTagsAndOrganize(driverNumber: number) {

    this.dataService.getAllTags(driverNumber).subscribe({
      next: (data:ITag[]) => {
        this.dataService.allTags = <ITag[]>data;
        console.log(data)
      },
      error: (err :string) => console.error(err),
      complete: () => {
        this.data = this.dataService.getOrganizedData(driverNumber);
      }
    })
  }

}
