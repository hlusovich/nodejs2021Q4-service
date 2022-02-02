"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error404 = void 0;
class Error404 extends Error {
    constructor(message) {
        super();
        this.myCode = 404;
        this.message = message;
    }
}
exports.Error404 = Error404;
//# sourceMappingURL=404error.js.map