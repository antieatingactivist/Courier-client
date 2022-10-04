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
      return this.http.get<ITag[]>('http://10.0.0.126:3000')    
    }
    postTag(newTag: ITag) {
      return this.http.post<ITag>('http://10.0.0.126:3000', newTag, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }    
    changeStatus(status: string, tagId: number) {
      return this.http.put(`http://10.0.0.126:3000/${tagId}`, {status: status}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }
    assignToDriver(driver: number, tagId: number) {
      return this.http.put(`http://10.0.0.126:3000/${tagId}`, driver, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }

    getOrganizedData(driverNumber?: number) {
      let tags: ITag[] = this.allTags;
      // this.organizedStops = [];
      if (driverNumber) {
        tags = this.filterByDriver(tags, driverNumber);
      }

      tags = this.sortByStatus(tags);

      this.organizedStops = this.splitTagIntoStops(tags);

      return this.organizedStops;
    }

    getSingleStop(index: number) {
      return this.organizedStops[index];
    }

    getSingleTag(index: number) {
      return this.allTags[index];
    }

    private filterByDriver(tags: ITag[], driverNumber: number) {
      return tags.filter(tag => tag.assignedTo === driverNumber);
    }

    private sortByStatus(tags: ITag[]) {
      return tags.sort((a, b) => compare(a, b));
      function compare(a: ITag, b: ITag) {
        if (a.status === "complete" && b.status !== "complete") {
          return 1
        } else {
          return -1
        }
      }
    }

    private splitTagIntoStops(tags: ITag[]) {
      const stops: IStop[] = [];
      for (let tag of tags) {
          stops.push({
            clientInfo: tag.sender,
            associatedClient: tag.recipient,
            level: tag.level,
            id: tag.id,
            status: tag.status
          });
          stops.push({
            clientInfo: tag.recipient,
            associatedClient: tag.sender,
            level: tag.level,
            id: tag.id+.01,
            status: tag.status
          });
      }
      return stops;
    }
}