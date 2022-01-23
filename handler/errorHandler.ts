import { ResponseObject } from '@hapi/hapi';
import logger from '../utils/Logger';

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
