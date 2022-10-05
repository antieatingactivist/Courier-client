import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { DetailsComponent } from './details/details.component';
import { StopComponent } from './stop-list/stop/stop.component';
import { FormsModule } from '@angular/forms';
import { SignatureComponent } from './details/signature/signature.component';
import { MenuComponent } from './menu/menu.component'


const routes: Routes = [
  { path: '', component: DriverComponent },
  { path: 'stops/:driverNumber', component: StopListComponent },
  { path: 'details/:id', component: DetailsComponent },
]

@NgModule({
  declarations: [
    DriverComponent,
    StopListComponent,
    DetailsComponent,
    StopComponent,
    SignatureComponent,
    MenuComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DriverModule { }
