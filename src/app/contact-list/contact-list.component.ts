import { Component, Input } from '@angular/core';
import { IContact } from '../common/models/contact.model';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
})

export class TableComponent {
  @Input() contactsList: IContact[];
}
