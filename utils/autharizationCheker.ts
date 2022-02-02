import { verify } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config';

// const allowedUrls = ['/login', '/doc', '/'];
/**
 * return true  if this url protected and request's
 * header  includes  authorization with valid JWT token
 * @param token:string
 * @returns false if
 * header  includes  authorization with invalid JWT token or no JWT
 */
export function isAuth(token: string): boolean {
  try {
    if (!token) {
      return false;
    }
    verify(token.split(' ')[1], JWT_SECRET_KEY);
    return true;
  } catch (e) {
    return false;
  }
}
