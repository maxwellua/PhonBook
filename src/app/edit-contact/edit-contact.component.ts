import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Contact } from '../common/services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit-contact.component.html',
  styleUrls: ['edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @Input() contactToEdit: Contact;

  constructor(
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  cancelEditing() {
    this.dialogRef.close();
  }

  addUser() {
    this.dialogRef.close(this.contactToEdit);
  }

  ngOnInit() {
    this.contactToEdit = this.data;
  }
}
