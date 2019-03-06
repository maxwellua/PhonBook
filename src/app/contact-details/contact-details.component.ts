import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { IContact } from '../common/models/contact.model';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ContactsService } from '../common/services/contacts.service';
import { ExchangeDataService } from '../common/services/exchange-data.service';
import { requestToUpdate } from '../common/services/constants/requestCommands';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details-element',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit{
  @Input() contact: IContact;

  private id;

  constructor(public dialog: MatDialog,
              private contactsHttpService: ContactsService,
              private exchangeDataService: ExchangeDataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    if (!this.contact) {
      this.activatedRoute.queryParams
        .subscribe( params => {
          this.contact = JSON.parse(params.data);
        });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '1400px',
      data: this.contact,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.contactsHttpService.updateContact(result)
          .subscribe(data => {
            console.log(data);
            this.exchangeDataService.requestDataUpdate.next(requestToUpdate.contactList);
          });
      }
    });
  }

  editContact() {
    this.openDialog();
  }

  deleteContact(contactID: number) {
    this.contactsHttpService.deleteContact(contactID)
      .subscribe(data => {
        console.log(data);
        this.exchangeDataService.requestDataUpdate.next(requestToUpdate.contactList);
      });
    console.log('Deleted contact with ID: ' + contactID);
  }
}
