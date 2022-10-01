import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchComponent } from './dispatch.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DispatchComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DispatchModule { }
