export const codeStatuses = {
  POST:201,
  GET:200,
  PUT:200,
  DELETE:200
};
type codeStatuses = typeof codeStatuses;
export type methodsEnum = keyof codeStatuses
/**
 * return  number(code status)
 * @param string key of enum with HTTP methods
 * @returns number (HTTP status code)
 */
export const  setStatusCode = (method:methodsEnum):number=> codeStatuses[method];

