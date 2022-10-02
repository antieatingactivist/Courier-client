import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tag } from './tag';

@Component({
  selector: 'app-new-tag',
  templateUrl: './new-tag.component.html',
  styleUrls: ['./new-tag.component.css']
})
export class NewTagComponent implements OnInit {
  tag = new Tag();

  constructor() { }

  ngOnInit(): void {
  }

  save(tagForm: NgForm): void {
    console.log(tagForm.form);
    console.log('Saved: ' + JSON.stringify(tagForm.value));
  }

}
