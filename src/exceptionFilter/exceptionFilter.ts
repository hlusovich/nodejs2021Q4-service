import {
  ExceptionFilter, Catch, ArgumentsHost,
} from '@nestjs/common';
import { logger } from '../MyLogger';
import { MyException } from '../../Errors/MyException';

@Catch(MyException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: MyException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    logger.error(`${status} ${exception.message}`);
    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      text: exception.message,
    });
  }
}
