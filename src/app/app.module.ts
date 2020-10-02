import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AnimatedtextComponent } from './common/animatedtext/animatedtext.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    AnimatedtextComponent,
    Page3Component,
    Page4Component,
    Page5Component,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
