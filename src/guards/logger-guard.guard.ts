import {
  CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { logger, MyLogger } from '../MyLogger';

@Injectable()
export class LoggerGuard implements CanActivate {
  logger: MyLogger;

  constructor() {
    this.logger = logger;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.log(context.switchToHttp().getRequest().body);
    this.logger.log(`METHOD ${context.switchToHttp().getRequest().method}`);
    this.logger.log(`URL ${context.switchToHttp().getRequest().url}`);
    return true;
  }
}
