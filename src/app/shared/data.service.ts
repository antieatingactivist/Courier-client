import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITag } from './stop-data.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
    private data:any = []
    constructor(private http: HttpClient) {  }

    getAllTags(): Observable<ITag[]> {
        return this.http.get<ITag[]>('http://localhost:3000')    
    }
}