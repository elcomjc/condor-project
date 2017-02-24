import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { ReferenceInputComponent } from './reference-input/reference-input.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { TrackingComponent } from './tracking/tracking.component';
import { TrackingInfoComponent } from './tracking-info/tracking-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceInputComponent,
    HomeComponent,
    TrackingComponent,
    TrackingInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLH9L6XlS_dcG6Wx9yk_NQCZsYK_Uo5d8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
