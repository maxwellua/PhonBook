import { Component, Input } from '@angular/core';
import { Contact } from '../common/services/contact.service';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})

export class TableComponent {
  @Input() contactList: Contact[];
}
