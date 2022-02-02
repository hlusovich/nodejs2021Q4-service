"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error401 = void 0;
class Error401 extends Error {
    constructor(message) {
        super();
        this.myCode = 401;
        this.message = message;
    }
}
exports.Error401 = Error401;
//# sourceMappingURL=401error.js.map