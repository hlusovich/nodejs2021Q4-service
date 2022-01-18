"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var Logger_js_1 = require("../utils/Logger.js");
var errorHandler = function (error, res) {
    Logger_js_1.default.log({ level: 0, message: error.message });
    if (error.myCode) {
        return res.code(error.myCode);
    }
    return res.code(500);
};
exports.errorHandler = errorHandler;
