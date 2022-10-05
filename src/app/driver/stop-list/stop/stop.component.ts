import { Component, OnInit, Input } from '@angular/core';
import { IStop } from "../../../shared/stop-data.model";

@Component({
  selector: 'driver-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  @Input() stop! : IStop;
  @Input() index: number = 0;
  status: string = "not-ready";
  role: string = "sender";
  show: boolean = true;

  constructor() { 
    
  }


  ngOnInit(): void {
    // if (this.stop.status === "complete") this.show = false;
    if (this.stop.clientInfo.isRecipient) this.role = "recipient";

    this.status = this.stop.status;
    
    if ((this.status === "ready") && this.stop.clientInfo.isRecipient) {
      this.status = "not-ready";
    }  
    if (this.status === "ready") {
      this.status = this.determineEarlyOrLate();
    }

     
    if ((this.status === "picked-up") && this.stop.clientInfo.isRecipient) {
      this.status = this.determineEarlyOrLate();
    }
    
  }

  private determineEarlyOrLate() {
    let status = "ready";
    const currentTime = new Date().getTime();
    const earliest = new Date(this.stop.clientInfo.arrivalWindowStart).getTime();
    const latest = new Date(this.stop.clientInfo.arrivalWindowEnd).getTime();

 
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
