import { Connection, createConnection, QueryRunner } from 'typeorm';
import {DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER} from "../config";


export const dbCreater = async () => {
  const connection:Connection = await createConnection({
    name: 'sdf',
    type: 'postgres',
    host: POSTGRES_HOST,
    username: SUPER_USER,
    password: POSTGRES_PASSWORD,
    port: POSTGRESS_PORT,
    database: 'postgres',
  });
  const queryRunner: QueryRunner = connection.createQueryRunner();
  await queryRunner.createDatabase(DB, true);
};
