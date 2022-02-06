"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerModel = void 0;
const user_1 = require("../../src/entity/user");
const bcrypt_1 = require("bcrypt");
const token_service_1 = require("../../src/token/token.service");
class UserControllerModel {
    static toResponse(user) {
        return { id: user.id, login: user.login, name: user.name };
    }
    static async getUserById(id) {
        const user = await user_1.UserModel.findOne(id);
        return user;
    }
    static async createUser(data) {
        if (data.password) {
            const hashPassword = await (0, bcrypt_1.hash)(data.password, 3);
            const user = await user_1.UserModel.create(Object.assign(Object.assign({}, data), { password: hashPassword }));
            await user.save();
            if (data.login) {
                const token = token_service_1.TokenService.generateToken({ login: data.login, id: data.id });
                await token_service_1.TokenService.saveToken(data.id, token);
            }
            return this.toResponse(user);
        }
        return undefined;
    }
}
exports.UserControllerModel = UserControllerModel;
//# sourceMappingURL=userController.js.map