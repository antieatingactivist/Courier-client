import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { IStop } from '../../shared/stop-data.model';


@Component({
  selector: 'driver-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private id: string = "";
  data: IStop;
  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.data = this.dataService.getSingleStop(+this.id);
  }

  ngOnInit(): void {
  }

  click(): void {
    console.log(this.data.id);
    let status: string;
    if (this.data.id - Math.floor(this.data.id) === 0) {
      status = "picked-up";
    } else {
      status = "complete";
    }
    this.dataService.changeStatus(status, Math.floor(this.data.id)).subscribe({
      next: (data: any) => {console.log(data)},
      error: (err: any) => {console.error(err)}
    })
  }


}
