export class Error403 extends Error {
  myCode:number;

  constructor(message:string) {
    super();
    this.myCode = 403;
    this.message = message;
  }
}
