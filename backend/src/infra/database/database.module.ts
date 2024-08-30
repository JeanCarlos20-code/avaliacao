import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { TypeormConfigService } from './typeorm/typeorm.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
      inject: [TypeormConfigService],
    }),
  ],
  providers: [TypeormConfigService],
})
export class DatabaseModule {}
