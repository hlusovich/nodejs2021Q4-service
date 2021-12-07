export const codeStatuses = {
    POST: 201,
    GET: 200,
    PUT: 200,
    DELETE: 200
};
export const setStatusCode = (method) => codeStatuses[method];
