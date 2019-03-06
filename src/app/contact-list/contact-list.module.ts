import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { CommonModule } from '@angular/common';
import { ContactDetailsModule } from '../contact-details/contact-details.module';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ContactDetailsModule
  ],
  exports: [
    ContactListComponent
  ]
})
export class ContactListModule {
}
