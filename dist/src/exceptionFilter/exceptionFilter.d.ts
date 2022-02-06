import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { MyException } from '../../Errors/MyException';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: MyException, host: ArgumentsHost): void;
}
