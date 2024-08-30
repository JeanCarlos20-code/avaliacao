import { JuridicPerson } from '../class/juridic-person';

export abstract class JuridicPersonRepository {
  abstract create(data: JuridicPerson): Promise<JuridicPerson>;
  abstract findByCnpj(cnpj: string): Promise<JuridicPerson>;
}
