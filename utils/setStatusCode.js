"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStatusCode = exports.codeStatuses = void 0;
exports.codeStatuses = {
    POST: 201,
    GET: 200,
    PUT: 200,
    DELETE: 200,
};
var setStatusCode = function (method) { return exports.codeStatuses[method]; };
exports.setStatusCode = setStatusCode;
