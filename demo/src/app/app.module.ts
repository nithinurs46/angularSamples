import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompNew1Component } from './comp-new1/comp-new1.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AddressCardNewComponent } from './address-card-new/address-card-new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompNew1Component,
    AddressCardComponent,
    AddressCardNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
