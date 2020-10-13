import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardModule } from './main/dashboard/dashboard.module';
import { LoginComponent } from './main/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './main/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
