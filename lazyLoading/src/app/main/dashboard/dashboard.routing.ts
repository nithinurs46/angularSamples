import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path:'dashboard', component:DashboardComponent,
        children:[
            {
                path:'test', component:TestComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
