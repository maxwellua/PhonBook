import { IContact } from '../models/contact.model';

export class Contact implements IContact {
  constructor (public id: number,
               public firstName: string,
               public lastName: string,
               public avatar: any,
               public phone: string) {}
}
