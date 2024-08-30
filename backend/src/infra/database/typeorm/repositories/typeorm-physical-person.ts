import { Injectable } from '@nestjs/common';
import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormPhysicalPersonRepository
  implements PhysicalPersonRepository
{
  constructor(private repository: Repository<PhysicalPerson>) {}
  create(data: PhysicalPerson): Promise<PhysicalPerson> {
    return this.repository.save(data);
  }
  findByCpf(cpf: string): Promise<PhysicalPerson> {
    return this.repository.findOne({ where: { cpf } });
  }
}
