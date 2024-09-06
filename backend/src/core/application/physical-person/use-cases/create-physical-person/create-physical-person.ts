import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { Bcrypt } from 'src/core/domain/criptography/bcrypt';
import { PhysicalPersonInterface } from 'src/core/domain/interface/physical-person-interface';
import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';

export class CreatePhysicalPersonService {
  constructor(
    private physicalPersonRepository: PhysicalPersonRepository,
    private harsher: Bcrypt,
  ) {}

  async execute(data: PhysicalPersonInterface): Promise<PhysicalPerson> {
    const physicalPerson = await this.physicalPersonRepository.findByCpf(
      data.cpf,
    );
    if (physicalPerson) {
      throw new Error('Physical person already exists');
    }
    const email = await this.physicalPersonRepository.findByEmail(data.email);
    if (email) {
      throw new Error('Email already exists');
    }
    const hasherPassword = await this.harsher.hash(data.password);
    return this.physicalPersonRepository.create({
      ...data,
      password: hasherPassword,
    });
  }
}
