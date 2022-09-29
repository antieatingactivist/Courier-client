import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private data:any = []
    constructor(private http: HttpClient) {  }

    // getData() {
    //     const url ='http://localhost:3000'
    //     this.http.get(url).subscribe((res)=>{
    //         this.data = res;
    //     });
    //     return this.data;
    // }
    getAllTags(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000')    
    }
}