import {HttpStatus} from "@nestjs/common";

export {Response} from "express";
type Errors = { message: string, myCode?: number };
/**
 * add responses objects:ResponseObject header status
 * code 404,401,403 if error instace of custom Error404
 and 500 if instance of casual Error object;
 * @param error:Error;
 * @param res:ResponseObject;
 * @returns ResponseObject;
 */
export const errorHandler = (error: Errors): number => {
  if (error.myCode) {
    return  error.myCode
  }
  return HttpStatus.INTERNAL_SERVER_ERROR;
};
