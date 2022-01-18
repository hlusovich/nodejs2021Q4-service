"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("../config");
var _401error_1 = require("../Errors/401error");
var allowedUrls = ['/login', '/doc', '/'];
function isAuth(request) {
    console.log(request.headers);
    if (allowedUrls.includes(request.url.pathname)) {
        return;
    }
    try {
        if (!request.headers.authorization) {
            throw new _401error_1.Error401("It's necessary to provide auth token");
        }
        var userData = (0, jsonwebtoken_1.verify)(request.headers.authorization.split(' ')[1], config_1.JWT_SECRET_KEY);
    }
    catch (e) {
        throw new _401error_1.Error401('Incorrect json web token');
    }
}
exports.isAuth = isAuth;
