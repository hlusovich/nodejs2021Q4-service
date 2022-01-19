import {
  Connection,
  ConnectionOptions,
  createConnection,
  QueryRunner,
} from 'typeorm';
import {
  DB, POSTGRES_PASSWORD, PORT, POSTGRESS_PORT, SUPER_USER,
} from './config.js';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  username: SUPER_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRESS_PORT,
  database: DB,
  synchronize: false,
  logging: false,
  entities: ['src/entity/*.js'],
  cli: {
    migrationsDir: 'migration',
    entitiesDir: 'src/entity',
    subscribersDir: 'src/subscriber',
  },
  migrations: [
    'migration/**/*.ts',
  ],
};
// npm run typeorm:cli -- migration:run
// npm run typeorm:cli -- migration:create -n UserFullName

export =config;
