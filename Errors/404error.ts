export class Error404 extends Error {
  myCode:number;

  constructor(message:string) {
    super();
    this.myCode = 404;
    this.message = message;
  }
}
