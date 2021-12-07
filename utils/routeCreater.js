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
            return errorHandler(new Error(e.message), h.response(moc()));
        }
    }
});
