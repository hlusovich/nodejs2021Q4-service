import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { Observable } from 'rxjs';
import {isAuth} from "../../utils/autharizationCheker";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const isAllowed = isAuth(req.headers.authorization);
    if(!isAllowed){
      throw new UnauthorizedException();
    }
    return isAllowed;
  }
}
