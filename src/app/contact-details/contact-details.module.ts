import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatIconModule } from '@angular/material';

import { ContactDetailsComponent } from './contact-details.component';

@NgModule({
  declarations: [
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    ContactDetailsComponent
  ]
})
export class ContactDetailsModule {
}
