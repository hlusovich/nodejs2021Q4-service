declare type Errors = {
    message: string;
    myCode?: number;
};
export declare const errorHandler: (error: Errors) => number;
export {};
