import { ResponseObject } from '@hapi/hapi';
/**
 * add responses objects header status code 404
 * @param there is no param
 * @returns void
 */
export const errorHandler = (error: Error, res: ResponseObject): ResponseObject => res.code(404);
