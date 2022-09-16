import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier-client';
  data:any = []
  parsedData:string = "";
  constructor(private http: HttpClient) {}
  
  getData() {
    const url ='http://localhost:3000'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      this.parsedData = JSON.stringify(this.data[0], null, 2);
      console.log(JSON.stringify(this.data[0]))
    })
  }
}