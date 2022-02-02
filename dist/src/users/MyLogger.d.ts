import { ConsoleLogger } from '@nestjs/common';
export declare class MyLogger extends ConsoleLogger {
    level: number;
    constructor(level: number);
    log(message: any): void;
    warn(message: any): void;
    debug(message: any): void;
    error(message: any): void;
}
export declare const logger: MyLogger;
