import { ConnectionOptions, createConnection } from 'typeorm';
import { server } from './app';
import {
  PORT, SUPER_USER, POSTGRES_PASSWORD, POSTGRESS_PORT, DB, POSTGRES_HOST,
} from '../config';
import user from './resources/users/user.router';
import board from './resources/boards/board.router';
import login from './resources/login/login.router';
import task from './resources/tasks/task.router';
import Logger from '../utils/Logger';
import 'reflect-metadata';

import { TaskModel } from './entity/task';
import { UserModel } from './entity/user';
import { BoardModel } from './entity/board';
import { TokensModel } from './entity/tokens';
import { createUser } from './resources/users/user.service';
import { dbCreater } from '../utils/dbCreater';

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
  await server.start();
  process.on('uncaughtException', () => {
    Logger.log({ message: 'we have an uncaughtException', level: 0 });
  });
  process.on('unhandledRejection', (error) => {
    Logger.log({ level: 0, message: 'we have an unhandledRejection' });
  });
  Logger.log({ level: 2, message: `Server successfully started on port ${PORT}` });
}

async function createDBConnection():Promise<void> {
  try {
    await dbCreater();
    await createConnection(options).then(async (serverInstance) => {
      await createUser(testUser);
      await serverInstance.runMigrations();
      await startServer();
    });
  } catch (e) {
    console.log(e);
    Logger.log({ message: 'we have an error when trying to connect ot db', level: 0 });
  }
}

const userRoutes = user;
const boardRoutes = board;
const taskRoutes = task;
const loginRoutes = login;
createDBConnection();
