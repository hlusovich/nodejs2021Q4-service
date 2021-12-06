
const errorHandler = (error:Error, res:any) => {
  return res.code(404);
};
module.exports = errorHandler;
