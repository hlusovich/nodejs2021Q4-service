"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const user_1 = require("../entity/user");
const token_service_1 = require("../token/token.service");
const _404error_1 = require("../../Errors/404error");
let UsersService = class UsersService {
    async getAll() {
        const result = await user_1.UserModel.query('SELECT * FROM users');
        return result;
    }
    async getOne(id) {
        const user = await user_1.UserModel.findOne(id);
        if (!user) {
            throw new _404error_1.Error404("this user doesn't exist");
        }
        return user;
    }
    async create(userDto) {
        const hashPassword = await (0, bcrypt_1.hash)(userDto.password, 3);
        const user = await user_1.UserModel.create(Object.assign(Object.assign({}, userDto), { password: hashPassword, id: (0, uuid_1.v4)() }));
        await user.save();
        if (userDto.login) {
            const token = token_service_1.TokenService.generateToken({ login: user.login, id: user.id });
            await token_service_1.TokenService.saveToken(user.id, token);
        }
        delete user.password;
        return user;
    }
    async update(userDto, id) {
        const response = await user_1.UserModel.update(id, Object.assign({}, userDto));
        if (response.affected === 0) {
            throw new _404error_1.Error404("this user doesn't exist");
        }
        return response;
    }
    async delete(id) {
        const response = await user_1.UserModel.delete(id);
        if (response.affected === 0) {
            throw new _404error_1.Error404("this user doesn't exist");
        }
        return response;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map