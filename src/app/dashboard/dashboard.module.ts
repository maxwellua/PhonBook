import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { ExchangeDataService } from '../common/services/exchange-data.service';
import { EditContactModule } from '../edit-contact/edit-contact.module';
import { ContactListModule } from '../contact-list/contact-list.module';
import { CreateContactModule } from '../create-contact/create-contact.module';
import { ContactsService } from '../common/services/contacts.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CreateContactModule,
    EditContactModule,
    ContactListModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    ExchangeDataService,
    ContactsService
  ]
})
export class DashboardModule {
}
