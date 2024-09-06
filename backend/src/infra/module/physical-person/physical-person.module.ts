import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { CreatePhysicalPersonController } from './controllers/create-physical-person.controller';
import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';
import { DataSource } from 'typeorm';
import { TypeormPhysicalPersonRepository } from 'src/infra/database/typeorm/repositories/typeorm-physical-person';
import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { Bcrypt } from 'src/core/domain/criptography/bcrypt';
import { BcryptAdapter } from 'src/infra/common/cryptography/bcrypt-adapter';
import { CreatePhysicalPersonService } from 'src/core/application/physical-person/use-cases/create-physical-person/create-physical-person';
import { PhysicalPersonSchema } from 'src/infra/database/schema/physical-person.schema';

@Module({
  imports: [TypeOrmModule.forFeature([PhysicalPersonSchema])],
  controllers: [CreatePhysicalPersonController],
  providers: [
    BcryptAdapter,
    {
      provide: PhysicalPersonRepository,
      useFactory: (dataSource: DataSource) => {
        return new TypeormPhysicalPersonRepository(
          dataSource.getRepository(PhysicalPerson),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreatePhysicalPersonService,
      useFactory: (
        physicalPersonRepository: PhysicalPersonRepository,
        hasher: Bcrypt,
      ) => {
        return new CreatePhysicalPersonService(
          physicalPersonRepository,
          hasher,
        );
      },
      inject: [PhysicalPersonRepository, BcryptAdapter],
    },
  ],
})
export class PhysicalPersonModule {}
