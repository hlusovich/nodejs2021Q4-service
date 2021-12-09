import { ResponseObject } from '@hapi/hapi';
import { Error404 } from '../Errors/404error.js';

/**
 * add responses objects:ResponseObject header status code 404 if error instace of custom Error404
  and 500 if instance of casual Error object;
 * @param error:Error;
 * @param res:ResponseObject;
 * @returns ResponseObject;
 */
export const errorHandler = (error: Error, res: ResponseObject): ResponseObject => {
  if (error instanceof Error404) {
    return res.code(404);
  }
  return res.code(500);
};
