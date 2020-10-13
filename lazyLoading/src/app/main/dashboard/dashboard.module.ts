import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [
      DashboardComponent,
      TestComponent,
    ],
    imports: [
      SharedModule,
      DashboardRoutingModule,
    ],
    providers: [],
    exports: []
  })
  export class DashboardModule { }