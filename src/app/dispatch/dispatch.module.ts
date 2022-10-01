import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchComponent } from './dispatch.component';
import { RouterModule, Routes } from '@angular/router';
import { NewTagComponent } from './new-tag/new-tag.component';

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
    RouterModule.forChild(routes)
  ]
})
export class DispatchModule { }
