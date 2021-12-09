import { Error404 } from '../Errors/404error.js';

export const errorHandler = (error, res) => {
    if (error instanceof Error404) {
        return res.code(404);
    }
    return res.code(500);
};
