import {ServerRoute, ResponseToolkit, Request, ResponseObject, ResponseValue} from '@hapi/hapi';
import {setStatusCode, codeStatuses} from './setStatusCode.js';
import {errorHandler} from '../handler/errorHandler.js';
import logger from "./Logger.js";

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
export const createRoute =  (method: methodsEnum, path: string, handler: (req: Request) => ResponseValue): ServerRoute => ({
    method,
    path,
   async handler(req: Request, h: ResponseToolkit): Promise<ResponseObject | void> { //
        try {
            const query = `${req.url.searchParams  }`;
            const message = `full path with query ${req.url.href}
      path origin ${req.url.origin}
      status code ${setStatusCode(method)}
      ${query.length ? `query params ${req.url.searchParams}` : ''}
      ${req.payload ? `body ${JSON.stringify(req.payload)}` : ``}
      
     `;
            const response = await h.response(await handler(req));
            logger.log({level: 2, message});
            return response.code(setStatusCode(method));
        } catch (e: unknown) {
            const moc = (message:string) => message;
            if (e instanceof Error) {
                return errorHandler(e, h.response(moc(e.message)));
            }
            return errorHandler(new Error('System mistake'), h.response(moc('System mistake')));
        }

    }
});
