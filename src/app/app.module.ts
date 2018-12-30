import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from 'src/spa/spa.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { CarsComponent } from './cars/cars.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    CarsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
