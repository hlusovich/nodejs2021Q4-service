"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
function isAuth(token) {
    try {
        if (!token) {
            return false;
        }
        (0, jsonwebtoken_1.verify)(token.split(' ')[1], config_1.JWT_SECRET_KEY);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isAuth = isAuth;
//# sourceMappingURL=autharizationCheker.js.map