import { Component, OnInit } from '@angular/core';
import { Contact } from '../common/services/contact.service';
import { ContactsStorage } from '../common/services/exchange-data.service';
import { ContactsHttpService } from '../common/services/contacts-http.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: 'dash-board.component.html',
  styleUrls: ['dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  contacts: Contact[] = [
    new Contact(1, 'Ivan', 'Golopupenko', 'someURL', '111-222-333'),
    new Contact(2, 'Fedor', 'Smith', 'someURL', '231-665-343'),
    new Contact(3, 'John', 'Habibulin', 'someURL', '955-235-778'),
  ];
  private createMode = false;

  constructor(private contactsStorage: ContactsStorage,
              private contactsHttpService: ContactsHttpService) {}

  ngOnInit() {
    this.contactsHttpService.getUsers()
      .subscribe(data => this.contacts = data);
  }

  toggleEditMode() {
    this.createMode = !this.createMode;
  }
}
