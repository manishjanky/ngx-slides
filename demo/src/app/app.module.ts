import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSlidesModule } from 'ngx-slides';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxSlidesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
