import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITag, IStop } from './stop-data.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
    allTags: ITag[] = [];
    organizedStops: IStop[] = [];
    date: Date = new Date();

    constructor(private http: HttpClient) { 
      
    }
    getDate(): Date {
      this.date = new Date();
      return this.date;
    }

    getAllTags(): Observable<ITag[]> {
      return this.http.get<ITag[]>('http://localhost:3000')    
    }
    postTag(newTag: ITag) {
      return this.http.post<ITag>('http://localhost:3000', newTag, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }
    getOrganizedData() {
      this.organizedStops = [];
      for (let order of this.allTags) {
        this.organizedStops.push({
          clientInfo: order.sender,
          associatedClient: order.recipient,
          level: order.level,
          id: order.id,
        });
        this.organizedStops.push({
          clientInfo: order.recipient,
          associatedClient: order.sender,
          level: order.level,
          id: order.id+.01
        });
      }
      return this.organizedStops;
    }
    getSingleStop(index: number) {
      return this.organizedStops[index];
    }
    getSingleTag(index: number) {
      return this.allTags[index];
    }
}