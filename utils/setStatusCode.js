const codeStatuses = {
  POST:201,
  GET:200,
  PUT:200,
  DELETE:200
};

const  setStatusCode = (method)=> codeStatuses[method];
module.exports = setStatusCode;
