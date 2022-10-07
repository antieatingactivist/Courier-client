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
      senderName : "Krumper",
      senderEmail : "antieatingactivist@gmail.com",
      senderAddress : "44 Montgomery st.",
      senderCity : "San Francisco",
      senderState : "CA",
      senderZip : 94104,
      senderWindowStart : "2022-12-05T00:02",
      senderWindowEnd : "2022-12-05T00:30",
      
      recipientName : "Frumper",
      recipientEmail : "antieatingactivist@gmail.com",
      recipientAddress : "888 Brannon st.",
      recipientCity : "San Francisco",
      recipientState : "CA",
      recipientZip : 94103,
      recipientWindowStart : "2022-09-02T12:03",
      recipientWindowEnd : "2022-11-24T17:05",

      level: "Rush"
    }
  }

  save(formData: NgForm): void {
    const tag = <ITag>formData.form.value;

    this.dataService.postTag(tag).subscribe({
      next: (data: ITag) => {console.log(data)},
      error: (err: any) => {console.error(err)},
      
    })
  }

}
