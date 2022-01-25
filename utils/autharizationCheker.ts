import { Request } from '@hapi/hapi';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config';
import { Error401 } from '../Errors/401error';

const allowedUrls = ['/login', '/doc', '/'];
/**
 * throw error (instance of 401) if this url protected and request's
 * header  includes  authorization with valid JWT token
 * @param request: Request
 * @returns throw Error (instance of 401) or undefined if url allowed or request's
 * header  includes  authorization with valid JWT token
 */
export function isAuth(request: Request):never|undefined {
  if (allowedUrls.includes(request.url.pathname)) {
    return;
  }
  try {
    if (!request.headers.authorization) {
      throw new Error401("It's necessary to provide auth token");
    }
    verify(request.headers.authorization.split(' ')[1], JWT_SECRET_KEY);
  } catch (e) {
    throw new Error401('Incorrect json web token');
  }
}
