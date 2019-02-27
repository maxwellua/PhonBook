import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Contact } from '../common/services/contact.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContactsHttpService } from '../common/services/contacts-http.service';

@Component({
  selector: 'app-table-element',
  templateUrl: 'table-element.component.html',
  styleUrls: ['table-element.component.scss'],
})
export class TableElementComponent {
  @Input() contact: Contact;

  constructor(public dialog: MatDialog,
              private contactsHttpService: ContactsHttpService) {
  }

  openDialog(): void {
    const {firstName, lastName, phone} = this.contact;
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '1300px',
      data: this.contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.contactsHttpService.updateUser(result)
          .subscribe(data => console.log(data));
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
    this.contactsHttpService.deleteUser(contactID)
      .subscribe( data => console.log(data));
    console.log('Deleted contact with ID: ' + contactID);
  }
}
