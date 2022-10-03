import { Component, OnInit, Input } from '@angular/core';
import { ITag } from "../../../shared/stop-data.model";

@Component({
  selector: 'dispatch-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  @Input() tag! : ITag;
  @Input() index: number = 0;

  constructor() { 
    
  }


  ngOnInit(): void {
    // console.log(new Date(this.stop.clientInfo.arrivalWindowEnd).toISOString(), new Date().toISOString());
  }

}
