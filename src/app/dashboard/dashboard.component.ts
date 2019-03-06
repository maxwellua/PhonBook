import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExchangeDataService } from '../common/services/exchange-data.service';
import { ContactsService } from '../common/services/contacts.service';
import { IContact } from '../common/models/contact.model';
import { requestToUpdate } from '../common/services/constants/requestCommands';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  contactsList: IContact[] = [
    {
      id: 1,
      firstName: 'Ivan',
      lastName: 'Golopupenko',
      avatar: '',
      phone: '111-222-333',
      email: 'IvanGelo@from.hell',
    },
    {
      id: 2,
      firstName: 'Fedor',
      lastName: 'Smith',
      avatar: '',
      phone: '231-665-343',
      email: 'FedyaTH@drabiv.band',
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Habibulin',
      avatar: '',
      phone: '955-235-778',
      email: 'assman@but.head',
    }
  ];

  private createMode = false;

  constructor(private contactsService: ContactsService,
              private exchangeDataService: ExchangeDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.getContact();
    this.exchangeDataService.requestDataUpdate
      .subscribe(command => {
        if (command === requestToUpdate.contactList) {
          this.getContact();
        }
      });
  }

  toggleEditMode() {
    this.router.navigate(['/add']);
  }

  private getContact() {
    this.contactsService.getContacts()
      .subscribe((contactList: IContact[]) => this.contactsList = contactList);
    console.log(this.contactsList);
  }
}
