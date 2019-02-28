import { NgModule } from '@angular/core';
import { TableElementComponent } from './table-element.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule, MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TableElementComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    TableElementComponent
  ]
})
export class TableElementModule {
}
