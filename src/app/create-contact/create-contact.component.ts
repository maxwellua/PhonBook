import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactsService } from '../common/services/contacts.service';
import { ExchangeDataService } from '../common/services/exchange-data.service';
import { requestToUpdate } from '../common/services/constants/requestCommands';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: 'create-contact.component.html',
  styleUrls: ['create-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateContactComponent implements OnInit {
  @Output() action = new EventEmitter();

  contactCreateForm: FormGroup;

  constructor(private contactsHttpService: ContactsService,
              private exchangeDataService: ExchangeDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.contactCreateForm = this.formInit();
  }

  private cancelEditing() {
    this.router.navigate(['']);
    // this.action.emit();
  }

  private addContact() {
    console.log(this.contactCreateForm.value);
    this.contactsHttpService.createContact(this.contactCreateForm.value)
      .subscribe(data => {
        console.log(typeof data);
        this.exchangeDataService.requestDataUpdate.next(requestToUpdate.contactList);
        this.router.navigate(['']);
        // this.action.emit();
      });
  }

  private formInit() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, this.validateName()]),
      lastName: new FormControl('', [Validators.required, this.validateName()]),
      phone: new FormControl('', [Validators.required, this.validatePhone()]),
      email: new FormControl('', [Validators.required, this.validateEmail()]),
      avatar: new FormControl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFAjJFXMlocD0LvASU7mGlQCR_Nm0ULkxgmBeOxJd12yR3RE0y')
    });
  }

  private validateName() {
    return function(input: FormControl) {
      const pattern = /[a-zа-яё]+[\sa-zа-яё]*/i;
      return !!~input.value.search(pattern) ?
        null : {incorrectValue: true};
    };
  }

  private validatePhone() {
    return function(input: FormControl) {
      const pattern = /^\+?[0-9-]+$/;
      return !!~input.value.search(pattern) ?
        null : {incorrectValue: true};
    };
  }

  private validateEmail() {
    return function (input: FormControl) {
      const pattern = /[a-z0-9]*@[a-z0-9]*\.[a-z0-9]*(com|ru|net)$/i;
      return !!~input.value.search(pattern) ?
        null : {incorrectValue: true};
    };
  }

  private getErrorMessage(input: FormControl) {
    return input.hasError('required') ? 'Field can not be empty' :
      input.hasError('incorrectValue') ? 'Incorrect value' : '';
  }
}
