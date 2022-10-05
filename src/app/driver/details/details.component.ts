import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { IStop } from '../../shared/stop-data.model';
import { Location } from '@angular/common';



@Component({
  selector: 'driver-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private id: string = "";
  data: IStop;
  status: string = "not-ready";
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.data = this.dataService.getSingleStop(+this.id);
    
  }

  ngOnInit(): void {
    this.status = this.data.status;
    if (this.status === "ready" ) {
      this.status = this.determineEarlyOrLate();
    }
    if ((this.status === "ready") && this.data.clientInfo.isRecipient) {
      this.status = "not-ready";
    }    
    if ((this.status === "picked-up") && this.data.clientInfo.isRecipient) {
      this.status = this.determineEarlyOrLate();
    }
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
    });
    this.location.back();
  }

  private determineEarlyOrLate() {
    let status = "ready";
    const currentTime = new Date().getTime();
    const earliest = new Date(this.data.clientInfo.arrivalWindowStart).getTime();
    const latest = new Date(this.data.clientInfo.arrivalWindowEnd).getTime();
    console.log(
       
      currentTime - latest
    );
 
    if (earliest - currentTime > 0) {
      status = "early";
      if (earliest - currentTime < 60000 * 5) {
        status = "almost-ready";
      } 
    }

    if (currentTime - latest > -60000 * 5) {
      status = "almost-late";
      if (currentTime - latest > 0) {
        status = "late";
      }
    }

    return status;
    
  }


}
