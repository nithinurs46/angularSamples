import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

const routes: Route[] = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'settings', component:SettingsComponent,
    children:[
      {path: 'profile', component:SettingsProfileComponent},
      {path: 'contact', component:SettingsContactComponent}
    ]
},
  {path: '**', component:ErrorComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
