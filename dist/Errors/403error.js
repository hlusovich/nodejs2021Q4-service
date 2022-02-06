"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error403 = void 0;
class Error403 extends Error {
    constructor(message) {
        super();
        this.myCode = 403;
        this.message = message;
    }
}
exports.Error403 = Error403;
//# sourceMappingURL=403error.js.map