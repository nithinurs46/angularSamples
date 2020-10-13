import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ImportSectionComponent } from './home/import-section/import-section.component';
import { ExportSectionComponent } from './home/export-section/export-section.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginPageComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'importSection', component:ImportSectionComponent},
  {path: 'exportSection', component:ExportSectionComponent},
  {path: 'register', component:RegisterUserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
