import { User } from './user';

export class Item {
  constructor(
    public _id?: string,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public owner?: string | User
  ) {}
}
