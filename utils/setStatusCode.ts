const codeStatuses = {
  POST:201,
  GET:200,
  PUT:200,
  DELETE:200
};
type codeStatuses = typeof codeStatuses;

export const  setStatusCode = (method:keyof codeStatuses)=> codeStatuses[method];

