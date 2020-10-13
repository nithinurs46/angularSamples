import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { ImportSectionComponent } from './import-section/import-section.component';
import {ButtonModule} from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import {ChartModule, TabViewModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ImportTableComponent } from './import-table/import-table.component';
import {CardModule} from 'primeng/card';
import { ExportSectionComponent } from './export-section/export-section.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExportTableComponent } from './export-table/export-table.component';


@NgModule({
  declarations: [HomepageComponent, ImportSectionComponent, MenuComponent, ImportTableComponent, ExportSectionComponent, ExportTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule, 
    FormsModule, 
    MaterialModule,
    MenubarModule,
    ButtonModule,
    ChartModule,
    AccordionModule,
    PanelModule,
    TabViewModule,
    TableModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    BreadcrumbModule,
    CardModule,
    NgbModule 
  ],
  exports: [
    
  ],
  providers:[
    
  ]
})
export class HomeModule { }
