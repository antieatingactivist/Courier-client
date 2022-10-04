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
    changeStatus(status: string, tagId: number) {
      return this.http.put(`http://localhost:3000/${tagId}`, {status: status}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }
    assignToDriver(driver: number, tagId: number) {
      return this.http.put(`http://localhost:3000/${tagId}`, driver, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }

    getOrganizedData(driverNumber?: number) {
      this.organizedStops = [];
      for (let tag of this.allTags) {

        if (tag.assignedTo === driverNumber || driverNumber === null) {

          this.organizedStops.push({
            clientInfo: tag.sender,
            associatedClient: tag.recipient,
            level: tag.level,
            id: tag.id,
          });
          this.organizedStops.push({
            clientInfo: tag.recipient,
            associatedClient: tag.sender,
            level: tag.level,
            id: tag.id+.01
          });
        }
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