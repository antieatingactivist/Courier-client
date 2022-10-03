import { Component, OnInit } from '@angular/core';
import { DataService } from "../../shared/data.service";
import { ITag, IStop } from "../../shared/stop-data.model"

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  data:IStop[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getAllTags();
  }
  private getAllTags() {
    this.dataService.getAllTags().subscribe({
      next: (data:ITag[]) => this.dataService.allTags = <ITag[]>data,
      error: (err :string) => console.error(err),
      complete: () => {
        this.data = this.dataService.getOrganizedData();
      }
    })
  }

}
