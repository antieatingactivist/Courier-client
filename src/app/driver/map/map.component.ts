import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'driver-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 14
 }
 marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }

  constructor() { }

  ngOnInit(): void {

  }


}
