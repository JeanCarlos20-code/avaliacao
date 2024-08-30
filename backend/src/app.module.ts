import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './infra/database/database.module';
import { PhysicalPersonModule } from './infra/module/physical-person/physical-person.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
    PhysicalPersonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
