import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { 
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)
  },
  { 
    path: 'dispatch',
    loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
