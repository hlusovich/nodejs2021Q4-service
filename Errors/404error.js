class Error404 extends Error{
  constructor({message}){
    super();
    this.message = message;
  }
}

module.exports = Error404;
