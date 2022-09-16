import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StopDataService {
    private data:any = []
    constructor(private http: HttpClient) {  }

    getData() {
        const url ='http://localhost:3000'
        this.http.get(url).subscribe((res)=>{
            this.data = res;
        });
        return this.data;
    }
}