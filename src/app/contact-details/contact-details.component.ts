import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { IContact } from '../common/models/contact.model';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContactsService } from '../common/services/contacts.service';
import { ExchangeDataService } from '../common/services/exchange-data.service';
import { requestToUpdate } from '../common/services/constants/requestCommands';

@Component({
  selector: 'app-table-element',
  templateUrl: 'table-element.component.html',
  styleUrls: ['table-element.component.scss'],
})
export class TableElementComponent {
  @Input() contact: IContact;

  constructor(public dialog: MatDialog,
              private contactsHttpService: ContactsService,
              private exchangeDataService: ExchangeDataService) {
  }

  openDialog() {
    const {firstName, lastName, phone} = this.contact;
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '1300px',
      data: this.contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.contactsHttpService.updateContact(result)
          .subscribe(data => console.log(data));
        this.exchangeDataService.requestDataUpdate.next(requestToUpdate.contactList);
      } else {
        this.contact.firstName = firstName;
        this.contact.lastName = lastName;
        this.contact.phone = phone;
      }
    });
  }

  editClick() {
    this.openDialog();
  }

  deleteClick(contactID: number) {
    this.contactsHttpService.deleteContact(contactID)
      .subscribe(data => console.log(data));
    console.log('Deleted contact with ID: ' + contactID);
    this.exchangeDataService.requestDataUpdate.next(requestToUpdate.contactList);
  }
}
