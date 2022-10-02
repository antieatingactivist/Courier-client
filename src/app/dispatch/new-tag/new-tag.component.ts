import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tag } from './tag';
import { DataService } from 'src/app/shared/data.service';
import { ITag } from 'src/app/shared/stop-data.model';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit {
  tag = new Tag();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tag = {
      senderName : "rwerwe",
      senderEmail : "antieatingactivist@gmail.com",
      senderAddress : "423423 fdsfsdfsd",
      senderCity : "fsd",
      senderState : "CA",
      senderZip : 43243,
      senderWindowStart : "2022-12-05T00:02",
      senderWindowEnd : "2022-12-05T00:30",
      
      recipientName : "rwerwe",
      recipientEmail : "antieatingactivist@gmail.com",
      recipientAddress : "53454 gdfgdf",
      recipientCity : "hgf",
      recipientState : "CA",
      recipientZip : 53434,
      recipientWindowStart : "2022-09-02T12:03",
      recipientWindowEnd : "2022-11-24T17:05"
    }
  }

  save(formData: any): void {
    const tag = <ITag>formData.form.value;
    console.log(tag);
    this.dataService.postTag(tag).subscribe(
      (data: ITag ) => console.log(data),
      (err: any ) => console.log(err)
    )
  }

}
