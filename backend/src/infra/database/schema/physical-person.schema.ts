import { PhysicalPerson } from 'src/core/domain/class/physical-person';
import { EntitySchema } from 'typeorm';

export const PhysicalPersonSchema = new EntitySchema<PhysicalPerson>({
  target: PhysicalPerson,
  name: 'Classification',
  synchronize: false,
  tableName: 'quality_classification',
  columns: {
    id: {
      type: 'int',
      primary: true,
      name: 'id_quality_classification',
    },
    cpf: {
      name: 'description',
      type: 'varchar',
    },
    email: {
      name: 'email',
      type: 'varchar',
    },
    bornDate: {
      name: 'born_date',
      type: 'date',
    },
    name: {
      name: 'name',
      type: 'varchar',
    },
    password: {
      name: 'password',
      type: 'varchar',
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      name: 'updated_at',
      type: 'timestamp',
      updateDate: true,
    },
    deletedAt: {
      name: 'deleted_at',
      type: 'timestamp',
      deleteDate: true,
    },
  },
});
