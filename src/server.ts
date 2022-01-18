import { ConnectionOptions, createConnection } from 'typeorm';
import { server } from './app.js';
import {
  PORT, SUPER_USER, POSTGRES_PASSWORD, POSTGRESS_PORT, DB,
} from '../config.js';
import user from './resources/users/user.router.js';
import board from './resources/boards/board.router.js';
import login from './resources/login/login.router.js';
import task from './resources/tasks/task.router.js';
import Logger from '../utils/Logger.js';
import 'reflect-metadata';

import { TaskModel } from './entity/task.js';
import { UserModel } from './entity/user.js';
import { BoardModel } from './entity/board.js';
import { ColumnsModel } from './entity/columns.js';
import { TokensModel } from './entity/tokens';

const options: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  username: SUPER_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRESS_PORT,
  database: DB,
  entities: [TaskModel, UserModel, BoardModel, ColumnsModel, TokensModel],
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
    await createConnection(options).then(async (serverInstance) => {
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
