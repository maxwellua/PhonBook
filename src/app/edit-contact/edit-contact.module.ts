import { NgModule } from '@angular/core';
import { EditContactComponent } from './edit-contact.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditContactComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    EditContactComponent
  ],
  entryComponents: [
    EditContactComponent
  ]
})
export class EditContactModule {
}
