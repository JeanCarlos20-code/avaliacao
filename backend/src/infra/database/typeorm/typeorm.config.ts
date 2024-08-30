import { join } from 'path';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const typeOrmConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  extra: {
    charset: 'utf8mb4_bin',
  },
  logging: ['query', 'error'],
  entities: [
    join(__dirname, 'schemas/*.{ts,js}'),
    join(__dirname, 'entities/*.{ts,js}'),
  ],
  migrations: [join(__dirname, 'migrations/*.{ts,js}')],
});
