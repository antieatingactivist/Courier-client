import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { DetailsComponent } from './details/details.component';
import { StopComponent } from './stop-list/stop/stop.component';

@NgModule({
  declarations: [
    AppComponent,
    StopListComponent,
    DetailsComponent,
    StopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
