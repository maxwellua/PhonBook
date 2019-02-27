import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { EditContactModule } from '../edit-contact/edit-contact.module';
import { TableModule } from '../table/table.module';
import { CreateContactModule } from '../create-contact/create-contact.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CreateContactModule,
    EditContactModule,
    TableModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule {
}
