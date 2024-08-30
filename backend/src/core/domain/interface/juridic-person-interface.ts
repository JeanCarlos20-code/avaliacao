import { UserInterface } from './user-interface';

export interface JuridicPersonInterface extends UserInterface {
  cnpj: string;
}
