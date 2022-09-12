import { User } from './user';

export class Item {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public quantity?: number,
    public owner?: string | User
  ) {}
}
