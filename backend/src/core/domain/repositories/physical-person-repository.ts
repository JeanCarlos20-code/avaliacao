import { PhysicalPerson } from '../class/physical-person';
import { PhysicalPersonInterface } from '../interface/physical-person-interface';

export abstract class PhysicalPersonRepository {
  abstract create(data: PhysicalPersonInterface): Promise<PhysicalPerson>;
  abstract findByCpf(cpf: string): Promise<PhysicalPerson>;
  abstract findByEmail(email: string): Promise<PhysicalPerson>;
}
