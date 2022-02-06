import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import {
  PORT, USE_FASTIFY,
} from '../config';
import { dbCreater } from '../utils/dbCreater';
import { logger } from './MyLogger';
import { createSuperUser } from '../utils/createSuperUserUtil';

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

async function createDBConnection(): Promise<void> {
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
  if(USE_FASTIFY ==="fastify"){
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(),{ logger: ['log', 'error', 'warn', 'debug'] });
    await app.listen(PORT);
  }
  else{
    const app = await NestFactory.create(AppModule,{ logger: ['log', 'error', 'warn', 'debug'] });
    await app.listen(PORT);

  }


}

bootstrap();
