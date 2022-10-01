import { Component, OnInit, Input } from '@angular/core';
import { IStop } from "../../shared/stop-data.model";

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  @Input() stop! : IStop;
  @Input() index: number = 0;

  constructor() { 
    
  }


  ngOnInit(): void {
    console.log(new Date(this.stop.clientInfo.arrivalWindowEnd).toISOString(), new Date().toISOString());
  }

}
