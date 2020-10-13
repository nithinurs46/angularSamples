import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

const materialModule: any[] = [MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModule
  ],
  exports: [
    materialModule
  ]
})
export class MaterialModule { }
