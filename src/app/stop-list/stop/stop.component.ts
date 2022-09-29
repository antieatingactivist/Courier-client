import { Component, OnInit, Input } from '@angular/core';
import { ITag } from "../../shared/stop-data.model";

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {
  @Input() stop: any;
  constructor() { }

  ngOnInit(): void {
  }

}
