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

  constructor() { 
    
  }


  ngOnInit(): void {
    console.log(new Date(this.stop.clientInfo.arrivalWindowEnd).toISOString(), new Date().toISOString());

    this.status = this.stop.status;
  }

}
