import {ServerRoute, ResponseToolkit, Request, ResponseObject, ResponseValue} from '@hapi/hapi';
import {setStatusCode, codeStatuses} from './setStatusCode.js';
import {errorHandler} from '../handler/errorHandler.js';

type codeStatuses = typeof codeStatuses;
type methodsEnum = keyof codeStatuses
/**
 * create  server route object:ServerRoute
 * @param method : methodsEnum (HTTP method);
 * @param path :string  url endpoint;
 * @param handler :function
 * @param req: Request
 *@returns ResponseValue
 * @returns ServerRoute
 */
export const createRoute = (method: methodsEnum, path: string, handler: (req: Request) => ResponseValue): ServerRoute => ({
    method,
    path,
    handler(req: Request, h: ResponseToolkit): ResponseObject | void { //
        try {
            const query: string = req.url.searchParams + "";
            console.log(`full path with query ${req.url.href}
      path origin ${req.url.origin}
      status code ${setStatusCode(method)}
      ${query.length ? `query params ${req.url.searchParams}` : ''}
      ${req.payload ? `body ${JSON.stringify(req.payload)}` : ``}
      
     `);
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
