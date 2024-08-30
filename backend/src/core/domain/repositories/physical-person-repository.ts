import { PhysicalPerson } from '../class/physical-person';

export abstract class PhysicalPersonRepository {
  abstract create(data: PhysicalPerson): Promise<PhysicalPerson>;
  abstract findByCpf(cpf: string): Promise<PhysicalPerson>;
}
