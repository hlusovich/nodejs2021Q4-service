"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var _404error_js_1 = require("../Errors/404error.js");
var Logger_js_1 = require("../utils/Logger.js");
var errorHandler = function (error, res) {
    Logger_js_1.default.log({ level: 0, message: error.message });
    if (!(error instanceof _404error_js_1.Error404) || error.myCode) {
        return res.code(404);
    }
    return res.code(500);
};
exports.errorHandler = errorHandler;
