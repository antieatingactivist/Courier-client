import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { StopListComponent } from './stop-list/stop-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
