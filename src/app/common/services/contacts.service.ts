import { Injectable } from '@angular/core';
import { CONTACTS_API } from './constants/userApi';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {
  constructor(private httpClient: HttpClient) {
  }

  getContacts(id?: number): Observable<IContact[]> {
    if (id || id === 0) {
      return this.httpClient.get<IContact[]>(CONTACTS_API + id);
    }
    return this.httpClient.get<IContact[]>(CONTACTS_API);
  }

  createContact(contact: IContact) {
    return this.httpClient.post(CONTACTS_API, contact);
  }

  updateContact(contact: IContact) {
    return this.httpClient.put(CONTACTS_API + contact.id, contact);
  }

  deleteContact(id: number) {
    return this.httpClient.delete(CONTACTS_API + id);
  }
}
