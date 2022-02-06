import {
  ConnectionOptions,
} from 'typeorm';
import {
  DB, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER, POSTGRES_HOST,
} from './config';

const config: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  username: SUPER_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRESS_PORT,
  database: DB,
  synchronize: false,
  logging: false,
  entities: ['srcOld/entity/*.js'],
  cli: {
    migrationsDir: 'migration',
    entitiesDir: 'srcOld/entity',
    subscribersDir: 'srcOld/subscriber',
  },
  migrations: [
    'migration/**/*.ts',
  ],
};
// npm run typeorm:cli -- migration:run
// npm run typeorm:cli -- migration:create -n UserFullName
// @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'SET NULL' })
// @JoinColumn({ name: 'userId' })
// user!: User;

export =config;
