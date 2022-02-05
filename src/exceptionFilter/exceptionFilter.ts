import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';
import {logger} from "../users/MyLogger";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        logger.error(status + " " + exception.message);
        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                text: exception.message
            });
    }
}
