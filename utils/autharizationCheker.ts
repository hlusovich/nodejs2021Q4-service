import { Request } from '@hapi/hapi';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config';
import { Error401 } from '../Errors/401error';

const allowedUrls = ['/login', '/doc', '/'];

export function isAuth(request: Request) {
  if (allowedUrls.includes(request.url.pathname)) {
    return;
  }
  try {
    if (!request.headers.authorization) {
      throw new Error401("It's necessary to provide auth token");
    }
    const userData = verify(request.headers.authorization.split(' ')[1], JWT_SECRET_KEY);
  } catch (e) {
    throw new Error401('Incorrect json web token');
  }
}
