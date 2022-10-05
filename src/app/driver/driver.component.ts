import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
import { NgForm } from '@angular/forms';
// import { Driver } from './driver';
import { Router } from '@angular/router';

@Component({
  selector: 'driver-root',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  title = 'Courier-client';
  date = this.dataService.getDate();
  drivers: number[] = [];
  driver = new Driver();


  constructor(private dataService: DataService, private router: Router) {}
  
  ngOnInit() {
    this.dataService.getDrivers().subscribe({
      next: (data:number[]) => this.drivers = <number[]>data,
      error: (err :string) => console.error(err),
    });
  }
  save(formData: NgForm): void {
    let driver = formData.form.value.driverNumber;
    console.log(formData.form.value);
    this.router.navigate(['stops', driver]);
  }
  
}

class Driver {
  constructor(
    public number = "",
  ) { }
}



