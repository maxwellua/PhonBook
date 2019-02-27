import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../common/services/contact.service';
import { ContactsHttpService } from '../common/services/contacts-http.service';

@Component({
  selector: 'app-create',
  templateUrl: 'create-contact.component.html',
  styleUrls: ['create-contact.component.scss'],
})
export class CreateContactComponent implements OnInit {
  @Output() action = new EventEmitter();
  private newUser: Contact;

  constructor(private contactsHttpService: ContactsHttpService) {}

  cancelEditing() {
    this.action.emit();
  }

  addUser() {
    console.log(this.newUser);
    this.contactsHttpService.createUser(this.newUser)
        .subscribe( data => {
          console.log(typeof data);
          this.action.emit(); });
  }

  ngOnInit() {
    this.newUser = new Contact(1111, '', '', '', '');
  }
}
