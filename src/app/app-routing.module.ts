import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components


const routes: Routes = [
  // { path: 'stops', component: StopListComponent },
  // { path: 'details/:id', component: DetailsComponent },
  { 
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
//   path: ':id',
//   component: ProductDetailComponent,
//   resolve: { resolvedData: ProductResolver }
// },