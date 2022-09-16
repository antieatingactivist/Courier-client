import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StopDataService {
    data:any = []
    constructor(private http: HttpClient) {  }
    getData() {
        const url ='http://localhost:3000'
        this.http.get(url).subscribe((res)=>{
        this.data = res
        console.log(JSON.stringify(this.data[0]))
        })
    }
}