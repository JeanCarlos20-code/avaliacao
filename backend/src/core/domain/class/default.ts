import { DefaultInterface } from '../interface/default-interface';

export class Default {
  id?: string | number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(props?: DefaultInterface) {
    this.id = props?.id;
    this.createdAt = props?.createdAt;
    this.updatedAt = props?.updatedAt;
    this.deletedAt = props?.deletedAt;
  }
}
