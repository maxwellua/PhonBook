import { Component, Input } from '@angular/core';
import { IContact } from '../common/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.scss'],
})

export class ContactListComponent {
  @Input() contactsList: IContact[];
}
