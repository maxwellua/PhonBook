import { Injectable, OnInit } from '@angular/core';
import { ContactsHttpService } from './contacts-http.service';
import { Contact } from './contact.service';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsStorage implements OnInit {
  private  contactList: Observable<any>;

  ngOnInit() {
   this.contactList = this.contactsHttpService.getUsers();
  }

  constructor(private contactsHttpService: ContactsHttpService) {
  }

  getContacts() {
    return this.contactList;
  }
}
