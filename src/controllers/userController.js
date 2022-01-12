import { UserModel } from '../models/user.js';
export class UserControllerModel {
    static async getAll() {
        const result = await UserModel.query("SELECT * FROM users3");
        return result;
    }
    ;
    static async getUserById(id) {
        const user = await UserModel.findOne(id);
        return user;
    }
    static async createUser(data) {
        const user = await UserModel.create(data);
        await user.save();
        return user;
    }
    ;
    static async updateUser(id, data) {
        return await UserModel.update(id, Object.assign({}, data));
    }
    ;
    static async deleteUser(id) {
        return await UserModel.delete(id);
    }
    ;
}
