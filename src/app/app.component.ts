import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from './common/services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'PhoneBook';
  private id;

  constructor(private contactsHttpService: ContactsService,
              private router: Router) {
  }

  private getOne() {
    this.contactsHttpService.getContacts(this.id)
      .subscribe( contact => {
        console.log(contact);
        this.router.navigate(['/contact/' + this.id], {queryParams: {data: JSON.stringify(contact)}});
    });
  }
}
