"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const bcrypt_1 = require("bcrypt");
const userController_1 = require("./userController");
const _403error_1 = require("../../Errors/403error");
const token_service_1 = require("../token/token.service");
class LoginController {
    static async login(payload) {
        const user = await userController_1.UserControllerModel.getUserByLogin(payload.login);
        if (!user) {
            throw new _403error_1.Error403('such user doesn\'t exist');
        }
        const isPassEquals = await (0, bcrypt_1.compare)(payload.password, user.password);
        if (!isPassEquals) {
            throw new _403error_1.Error403('such user doesn\'t exist');
        }
        const token = await token_service_1.TokenService.getToken(user.id);
        return token;
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=loginController.js.map