class Error404 extends Error{
  message:string
  constructor({message}:Error){
    super();
    this.message = message;
  }
}

module.exports = Error404;
