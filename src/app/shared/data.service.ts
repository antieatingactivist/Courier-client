import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITag, IStop } from './stop-data.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
    allTags: ITag[] = [];
    organizedStops: IStop[] = [];

    constructor(private http: HttpClient) {  }

    getAllTags(): Observable<ITag[]> {
        return this.http.get<ITag[]>('http://localhost:3000')    
    }
    getOrganizedData() {
      this.organizedStops = [];
      for (let order of this.allTags) {
        this.organizedStops.push({
          clientInfo: order.sender,
          associatedClient: order.recipient,
          level: order.level
        });
        this.organizedStops.push({
          clientInfo: order.recipient,
          associatedClient: order.sender,
          level: order.level
        });
      }
      return this.organizedStops;
    }
}