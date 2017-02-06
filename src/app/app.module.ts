import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./routing-module";
import {MaterialModule} from "@angular/material";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {ShowcaseModule} from "./showcase/showcase.module";
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
