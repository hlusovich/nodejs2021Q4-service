import { ResponseObject } from '@hapi/hapi';
import { Error404 } from '../Errors/404error.js';
import logger from '../utils/Logger.js';
import { Error403 } from '../Errors/403error';
import { Error401 } from '../Errors/401error';

type Errors = { message: string, myCode?: number };
/**
 * add responses objects:ResponseObject header status
 * code 404,401,403 if error instace of custom Error404
 and 500 if instance of casual Error object;
 * @param error:Error;
 * @param res:ResponseObject;
 * @returns ResponseObject;
 */
export const errorHandler = (error: Errors, res: ResponseObject): ResponseObject => {
  logger.log({ level: 0, message: error.message });
  if (error.myCode) {
    return res.code(error.myCode);
  }
  return res.code(500);
};
