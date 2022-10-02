import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchComponent } from './dispatch.component';
import { RouterModule, Routes } from '@angular/router';
import { NewTagComponent } from './new-tag/new-tag.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DispatchComponent },
  { path: 'newtag', component: NewTagComponent },
]

@NgModule({
  declarations: [
    NewTagComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DispatchModule { }
