import { setStatusCode } from './setStatusCode.js';
import { errorHandler } from '../handler/errorHandler.js';
import logger from "./Logger.js";
export const createRoute = (method, path, handler) => ({
    method,
    path,
    handler(req, h) {
        try {
            const query = req.url.searchParams + "";
            const message = `full path with query ${req.url.href}
      path origin ${req.url.origin}
      status code ${setStatusCode(method)}
      ${query.length ? `query params ${req.url.searchParams}` : ''}
      ${req.payload ? `body ${JSON.stringify(req.payload)}` : ``}
      
     `;
            logger.log({ level: 2, message });
            const response = h.response(handler(req));
            return response.code(setStatusCode(method));
        }
        catch (e) {
            const moc = () => 'Not Found';
            if (e instanceof Error) {
                return errorHandler(e, h.response(moc()));
            }
            return errorHandler(new Error('System mistake'), h.response(moc()));
        }
    }
});
