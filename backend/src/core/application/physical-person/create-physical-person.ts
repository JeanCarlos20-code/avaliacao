import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';

export class CreatePhysicalPersonService {
  constructor(private physicalPersonRepository: PhysicalPersonRepository) {}

  async execute(data: PhysicalPerson) {
    const physicalPerson = await this.physicalPersonRepository.findByCpf(
      data.cpf,
    );
    if (physicalPerson) {
      throw new Error('Physical person already exists');
    }
    return this.physicalPersonRepository.create(data);
  }
}
