import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IContact } from '../common/models/contact.model';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit-contact.component.html',
  styleUrls: ['edit-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditContactComponent implements OnInit {
  @Input() contactToEdit: IContact;

  contactEditForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.contactEditForm = this.formInit();
    console.log(this.contactEditForm.value);
  }

  cancelEditing() {
    this.dialogRef.close();
  }

  editContact() {
    this.dialogRef.close(this.contactEditForm.value);
  }

  private formInit() {
    return new FormGroup({
      id: new FormControl(this.data.id),
      firstName: new FormControl(this.data.firstName, [Validators.required, this.validateName()]),
      lastName: new FormControl(this.data.lastName, [Validators.required, this.validateName()]),
      phone: new FormControl(this.data.phone, [Validators.required, this.validatePhone()]),
      email: new FormControl(this.data.email, [Validators.required, this.validateEmail()]),
      avatar: new FormControl(this.data.avatar),
    });
  }

  private validateName() {
    return function (input: FormControl) {
      const pattern = /[a-zа-яё]+[\sa-zа-яё]*/i;
      return !!~input.value.search(pattern) ?
        null : {incorrectValue: true};
    };
  }

  private validatePhone() {
    return function (input: FormControl) {
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
