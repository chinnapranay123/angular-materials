import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOneComponent } from './table-one/table-one.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    TableOneComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[
    TableOneComponent
  ]
})
export class TablesModule { }
