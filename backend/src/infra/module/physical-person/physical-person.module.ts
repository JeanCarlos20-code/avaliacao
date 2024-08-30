import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { PhysicalPersonSchema } from 'src/infra/database/schema/physical-person.schema';
import { CreatePhysicalPersonController } from './controllers/create-physical-person.controller';
import { PhysicalPersonRepository } from 'src/core/domain/repositories/physical-person-repository';
import { DataSource } from 'typeorm';
import { TypeormPhysicalPersonRepository } from 'src/infra/database/typeorm/repositories/typeorm-physical-person';
import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { CreatePhysicalPersonService } from 'src/core/application/physical-person/create-physical-person';

@Module({
  imports: [TypeOrmModule.forFeature([PhysicalPersonSchema])],
  controllers: [CreatePhysicalPersonController],
  providers: [
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
      useFactory: (criteriaRepository: PhysicalPersonRepository) => {
        return new CreatePhysicalPersonService(criteriaRepository);
      },
      inject: [PhysicalPersonRepository],
    },
  ],
})
export class PhysicalPersonModule {}
