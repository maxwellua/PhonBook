import { Injectable } from '@angular/core';
import { Contact } from './contact.service';
import { USER_API } from './const/userApi';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsHttpService {
  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get(USER_API);
  }

  createUser(contact: Contact) {
    return this.httpClient.post(USER_API, contact);
  }

  updateUser(contact: Contact) {
    return this.httpClient.put(USER_API + '/' + contact.id, contact);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(USER_API + '/' + id);
  }
}
