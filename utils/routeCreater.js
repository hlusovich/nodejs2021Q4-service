const setStatusCode = require('./setStatusCode');
const errorHandler = require('../handler/errorHandler');
const createRoute = (method, path, handler) => {
  return {
    method,
    path,
    handler: function(req, h) { //
      try{
        const response = h.response(handler(req, h));
        return response.code(setStatusCode(method)); // reply with text.
      }
      catch(e){
        const moc = (req,h)=>{return "Not Found"};
       return  errorHandler(e,h.response(moc(req,h)));
      }

    }
  };
};
module.exports = createRoute;
