import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { ITag } from '../../shared/stop-data.model';
import { NgForm } from '@angular/forms';
import { AssignedTo } from './assignedTo';

@Component({
  selector: 'driver-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private id: string = "";
  tag: ITag;
  assignedTo = new AssignedTo();
  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.tag = this.dataService.getSingleTag(+this.id);
  }

  ngOnInit(): void {
    this.assignedTo.driver = <string><unknown>this.tag.assignedTo;
  }

  save(formData: NgForm): void {
    const tag = <ITag>formData.form.value;
  }


}
