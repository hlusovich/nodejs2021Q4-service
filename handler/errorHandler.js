const Error404 = require('../Errors/404error');
const errorHandler = (error, res) => {
  return res.code(404);
};
module.exports = errorHandler;
