"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = void 0;
const loginController_1 = require("../controllers/loginController");
const logIn = async (payload) => {
    const token = loginController_1.LoginController.login(payload);
    if (token) {
        return token;
    }
    return undefined;
};
exports.logIn = logIn;
//# sourceMappingURL=login.service.js.map