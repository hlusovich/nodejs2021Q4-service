import { setStatusCode } from './setStatusCode.js';
import { errorHandler } from '../handler/errorHandler.js';
export const createRoute = (method, path, handler) => ({
    method,
    path,
    handler(req, h) {
        try {
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
