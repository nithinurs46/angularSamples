import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

const sharedModules:any[] = [
    CommonModule,
    MaterialModule,
]

@NgModule({
  declarations: [],
  imports: [
    sharedModules
  ],
  exports: [sharedModules]
})
export class SharedModule { }
