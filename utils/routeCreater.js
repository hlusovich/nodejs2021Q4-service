import { setStatusCode } from './setStatusCode.js';
import { errorHandler } from '../handler/errorHandler.js';
import logger from "./Logger.js";
export const createRoute = (method, path, handler) => ({
    method,
    path,
    async handler(req, h) {
        try {
            const query = `${req.url.searchParams}`;
            const message = `full path with query ${req.url.href}
      path origin ${req.url.origin}
      status code ${setStatusCode(method)}
      ${query.length ? `query params ${req.url.searchParams}` : ''}
      ${req.payload ? `body ${JSON.stringify(req.payload)}` : ``}
      
     `;
            const response = await h.response(await handler(req));
            logger.log({ level: 2, message });
            return response.code(setStatusCode(method));
        }
        catch (e) {
            const moc = (message) => message;
            if (e instanceof Error) {
                return errorHandler(e, h.response(moc(e.message)));
            }
            return errorHandler(new Error('System mistake'), h.response(moc('System mistake')));
        }
    }
});
