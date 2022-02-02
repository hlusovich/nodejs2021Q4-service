"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllerModel = void 0;
const user_1 = require("../entity/user");
class UserControllerModel {
    static async getAll() {
        const result = await user_1.UserModel.query('SELECT * FROM users');
        return result;
    }
    static async getUserById(id) {
        const user = await user_1.UserModel.findOne(id);
        return user;
    }
    static async getUserByLogin(login) {
        const user = await user_1.UserModel.findOne({ login });
        return user;
    }
}
exports.UserControllerModel = UserControllerModel;
//# sourceMappingURL=userController.js.map