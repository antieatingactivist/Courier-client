import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITag, IStop, IOptions } from './stop-data.model'
import demoTags from './demoTags';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    demoMode = false;
    allTags: ITag[] = [];
    organizedStops: IStop[] = [];
    date: Date = new Date();
    options: IOptions = {
      hideComplete: false
    }

    constructor(private http: HttpClient) {
      this.initDemoTags();
    }

    getDate(): Date {
      this.date = new Date();
      return this.date;
    }

    getDrivers(): Observable<number[]> {
      return this.http.get<number[]>('http://10.0.0.126:3000/api/drivers/')    
    }
    getAllTags(driverNumber?: number): Observable<ITag[]> {
      if (driverNumber === -1) {
        this.demoMode = true;
        return new Observable((subscriber) => {
          subscriber.next(demoTags);
          subscriber.complete();
        })
      }
      if (!driverNumber) return this.http.get<ITag[]>(`http://10.0.0.126:3000/api/tags/`)
      else return this.http.get<ITag[]>(`http://10.0.0.126:3000/api/tags/${driverNumber}`)    
    }
    postTag(newTag: ITag) {
      return this.http.post<ITag>('http://10.0.0.126:3000/api/tags/', newTag, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }    
    changeStatus(status: string, tagId: number) {
      if (this.demoMode) {
        for (let tag of this.allTags) {
          if (tag.id === tagId) {
            tag.status = status;
          }
        }
        return new Observable((subscriber) => {
          subscriber.next();
          subscriber.complete();
        })
      }
      return this.http.put(`http://10.0.0.126:3000/api/tags/${tagId}`, {status: status}, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }
    assignToDriver(driver: number, tagId: number) {
      return this.http.put(`http://10.0.0.126:3000/api/tags/${tagId}`, driver, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : '*'
        })
      })
    }

    getOrganizedData(driverNumber?: number ) {
      let tags: ITag[] = this.allTags;
      console.log(this.allTags)
      // this.organizedStops = [];
      if (driverNumber) {
        tags = this.filterByDriver(tags, driverNumber);
      }

      tags = this.sortByTimeDue(tags);

      tags = this.sortByStatus(tags);

      for ( let tag of tags ) {
        console.log(new Date(tag.sender.arrivalWindowEnd));
      }




      if (this.options.hideComplete! === true) {
        tags = tags.filter(tag => tag.status !== "complete");
      }

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

    private sortByTimeDue(tags: ITag[]) {
      
      return tags.sort((a, b) => compare(a, b));
      function compare(a: ITag, b: ITag) {
        let aTime, bTime;
        if (a.status === "picked-up") {
          aTime = a.recipient.arrivalWindowEnd;
        } else {
          aTime = a.sender.arrivalWindowEnd;
        }

        if (b.status === "picked-up") {
          bTime = b.recipient.arrivalWindowEnd;
        } else {
          bTime = b.sender.arrivalWindowEnd;
        }


        if (new Date(aTime).getTime() < new Date(bTime).getTime()) {
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

    private initDemoTags() {
      for (let i in demoTags) {
        let now = new Date();
        now = new Date(now.setMinutes(now.getMinutes()-5*(<any>i-1)))
        // const offset = <any>i*5;
        // console.log(+i)
        demoTags[i].sender.arrivalWindowStart = new Date(now.setMinutes(now.getMinutes()+5));
        demoTags[i].sender.arrivalWindowEnd = new Date(now.setMinutes(now.getMinutes()+30));
        demoTags[i].recipient.arrivalWindowStart = new Date(now.setMinutes(now.getMinutes()));
        demoTags[i].recipient.arrivalWindowEnd = new Date(now.setMinutes(now.getMinutes()+30));
      }
    }
}

