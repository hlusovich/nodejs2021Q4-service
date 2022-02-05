import { NestFactory } from '@nestjs/core';
import { ConnectionOptions, createConnection } from 'typeorm';
import { AppModule } from './app.module';
import {
  DB, PORT, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRESS_PORT, SUPER_USER,
} from '../config';
import { TokensModel } from './entity/tokens';
import { TaskModel } from './entity/task';
import { UserModel } from './entity/user';
import { BoardModel } from './entity/board';
import { dbCreater } from '../utils/dbCreater';
import { logger } from './users/MyLogger';
import {FileModel} from "./entity/file";
import {UserControllerModel} from "../utils/controllers/userController";
import {createSuperUser} from "../utils/createSuperUserUtil";

/**
 * create server
 * @param there is no param
 * @returns Promise<void>
 */
async function startServer(): Promise<void> {
  process.on('uncaughtException', () => {
    logger.error('we have an uncaughtException');
  });
  process.on('unhandledRejection', (error) => {
    logger.error(error);
    logger.error('we have an unhandledRejection');
  });
  logger.log(`Server successfully started on port ${PORT}`);
}

async function createDBConnection():Promise<void> {
  try {
    await dbCreater();
    await startServer();
    await createSuperUser();
  } catch (e) {
    logger.error(e);
    logger.error({ message: 'we have an error when trying to connect ot db', level: 0 });
  }
}

async function bootstrap() {
  await createDBConnection();
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn', 'debug'] });
  await app.listen(PORT);
}

bootstrap();
