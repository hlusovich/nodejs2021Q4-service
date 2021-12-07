import { ServerRoute, ResponseToolkit, Request, ResponseObject, ResponseValue } from '@hapi/hapi';
import { setStatusCode, codeStatuses } from './setStatusCode.js';
import { errorHandler } from '../handler/errorHandler.js';

type codeStatuses = typeof codeStatuses;
type methodsEnum = keyof codeStatuses
export const createRoute = (method: methodsEnum, path: string, handler: (req: Request) => ResponseValue|undefined): ServerRoute => ({
  method,
  path,
  handler(req: Request, h: ResponseToolkit): ResponseObject| void { //
    try {
      const response = h.response(handler(req));
      return response.code(setStatusCode(method));
    } catch (e: unknown) {
      const moc = () => 'Not Found';
      if (e instanceof Error) {
        return errorHandler(e, h.response(moc()));
      }
      return errorHandler(new Error('System mistake'), h.response(moc()));
    }

  }
});
