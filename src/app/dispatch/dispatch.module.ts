import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchComponent } from './dispatch.component';
import { RouterModule, Routes } from '@angular/router';
import { NewTagComponent } from './new-tag/new-tag.component';
import { FormsModule } from '@angular/forms';
import { BoardComponent } from './board/board.component';
import { StopComponent } from './board/stop/stop.component';

const routes: Routes = [
  { path: '', component: DispatchComponent },
  { path: 'newtag', component: NewTagComponent },
  { path: 'board', component: BoardComponent }
]

@NgModule({
  declarations: [
    NewTagComponent,
    BoardComponent,
    StopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DispatchModule { }
