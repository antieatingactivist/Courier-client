import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverModule } from './driver/driver.module';

import { HttpClientModule } from "@angular/common/http";
import { DispatchComponent } from './dispatch/dispatch.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DispatchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DriverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
