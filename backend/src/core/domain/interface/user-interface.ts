import { DefaultInterface } from './default-interface';

export interface UserInterface extends DefaultInterface {
  name: string;
  email: string;
  password: string;
  bornDate: Date;
}
