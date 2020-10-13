import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { ViewsComponent } from './views/views.component';

@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ViewsComponent
  ]
})
export class ViewModule { }
