import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyLogger } from '../MyLogger';
export declare class LoggerGuard implements CanActivate {
    logger: MyLogger;
    constructor();
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
