import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule}from './app-routing.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TdFormComponent } from './components/td-form/td-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TdFormComponent, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
