import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';

export class ListByCpfPhysicalPersonService {
  constructor(private physicalPersonRepository: PhysicalPersonRepository) {}

  async execute(cpf: string) {
    return this.physicalPersonRepository.findByCpf(cpf);
  }
}
