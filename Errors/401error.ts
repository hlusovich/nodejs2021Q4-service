export class Error401 extends Error {
  myCode:number;

  constructor(message:string) {
    super();
    this.myCode = 401;
    this.message = message;
  }
}
