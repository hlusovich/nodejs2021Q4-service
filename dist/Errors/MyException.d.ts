import { HttpException } from "@nestjs/common";
export declare class MyException extends HttpException {
    message: string;
    code: number;
    constructor(message: string, code: number);
}
