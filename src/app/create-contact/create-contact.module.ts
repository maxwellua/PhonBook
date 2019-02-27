import { NgModule } from '@angular/core';
import { CreateContactComponent } from './create-contact.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    CreateContactComponent
  ]
})
export class CreateContactModule {
}
