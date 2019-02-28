import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { TableElementModule } from '../table-element/table-element.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableElementModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {
}
