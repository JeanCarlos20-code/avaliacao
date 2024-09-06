import { Injectable } from '@nestjs/common';
import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { PhysicalPersonInterface } from 'src/core/domain/interface/physical-person-interface';
import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormPhysicalPersonRepository
  implements PhysicalPersonRepository
{
  constructor(private repository: Repository<PhysicalPerson>) {}
  findByEmail(email: string): Promise<PhysicalPerson> {
    return this.repository.findOne({ where: { email } });
  }
  create(data: PhysicalPersonInterface): Promise<PhysicalPerson> {
    return this.repository.save({ ...data, id: undefined });
  }
  findByCpf(cpf: string): Promise<PhysicalPerson> {
    return this.repository.findOne({ where: { cpf } });
  }
}
