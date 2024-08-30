import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { join } from 'node:path';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    interface DatabaseConfig {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    }

    const dbConfig = this.configService.get<DatabaseConfig>('database');

    return {
      type: 'postgres',
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      autoLoadEntities: true,
      synchronize: false,
      entities: [
        join(__dirname, 'schemas/*.{ts,js}'),
        join(__dirname, 'entities/*.{ts,js}'),
      ],
    };
  }
}
