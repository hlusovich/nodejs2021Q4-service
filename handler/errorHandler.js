import { Error404 } from '../Errors/404error.js';
import logger from "../utils/Logger.js";
export const errorHandler = (error, res) => {
    logger.log({ level: 0, message: error.message });
    if (error instanceof Error404) {
        return res.code(404);
    }
    return res.code(500);
};
