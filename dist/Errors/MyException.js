"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyException = void 0;
const common_1 = require("@nestjs/common");
class MyException extends common_1.HttpException {
    constructor(message, code) {
        super(message, code);
        this.message = message;
        this.code = code;
    }
}
exports.MyException = MyException;
//# sourceMappingURL=MyException.js.map