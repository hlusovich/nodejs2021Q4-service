import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DB, PORT, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER} from "../config";
import {ConnectionOptions, createConnection} from "typeorm";
import {TokensModel} from "./entity/tokens";
import {TaskModel} from "./entity/task";
import {UserModel} from "./entity/user";
import {BoardModel} from "./entity/board";
import {dbCreater} from "../utils/dbCreater";

const testUser = { login: 'admin', name: 'admin', password: 'admin' };
const options: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  username: SUPER_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRESS_PORT,
  synchronize: true,
  database: DB,
  entities: [TaskModel, UserModel, BoardModel, TokensModel],
};
/**
 * create server
 * @param there is no param
 * @returns Promise<void>
 */
async function startServer(): Promise<void> {
  process.on('uncaughtException', () => {
    console.log({ message: 'we have an uncaughtException', level: 0 });
  });
  process.on('unhandledRejection', (error) => {
    console.log({ level: 0, message: 'we have an unhandledRejection' });
  });
  console.log({ level: 2, message: `Server successfully started on port ${PORT}` });
}

async function createDBConnection():Promise<void> {
  try {
    await dbCreater();
    await createConnection(options).then(async (serverInstance) => {
      await UserModel.create(testUser);
      await serverInstance.runMigrations();
      await startServer();
    });
  } catch (e) {
    console.log(e);
    console.log({ message: 'we have an error when trying to connect ot db', level: 0 });
  }
}


async function bootstrap() {
  await createDBConnection();
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
