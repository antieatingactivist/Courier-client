import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'driver-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() hideComplete = new EventEmitter<object>();
  constructor(private location: Location, private dataService: DataService) {}

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

  click(option: object) {
    // this.dataService.hideComplete();
    console.log(this.dataService)
    this.hideComplete.emit(option);
  }



}
