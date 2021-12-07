import { setStatusCode } from './setStatusCode.js';
import { errorHandler } from '../handler/errorHandler.js';
import { ServerRoute, ResponseToolkit } from '@hapi/hapi';

export const createRoute = (method: string, path: string, handler: (req?: Request) => {}): ServerRoute => ({
  method,
  path,
  handler(req: Request, h: ResponseToolkit) { //
    try {
      const response = h.response(handler(req));
      return response.code(setStatusCode(method)); // reply with text.
    } catch (e:unknown) {
      const moc = () => 'Not Found';
      if(e instanceof Error){
        return errorHandler(e, h.response(moc()));
      }
    }

  }
});
