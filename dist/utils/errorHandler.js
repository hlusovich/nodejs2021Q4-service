"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const common_1 = require("@nestjs/common");
const errorHandler = (error) => {
    if (error.myCode) {
        return error.myCode;
    }
    return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map