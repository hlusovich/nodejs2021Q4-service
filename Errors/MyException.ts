import {HttpException} from "@nestjs/common";

export class MyException extends HttpException {
    message:string;
    code:number;
constructor(message:string, code:number) {
super(message, code);
this.message = message;
this.code = code;
}
}
