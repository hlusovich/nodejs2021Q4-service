"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_1 = require("../entity/user");
const _404error_1 = require("../../Errors/404error");
const tokens_service_1 = require("../token/tokens.service");
let UsersService = class UsersService {
    constructor(usersRepository, tokensService) {
        this.usersRepository = usersRepository;
        this.tokensService = tokensService;
    }
    async getAll() {
        const result = await this.usersRepository.query('SELECT * FROM users');
        return result;
    }
    async getOne(id) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new _404error_1.Error404("this user doesn't exist");
        }
        return user;
    }
    async create(userDto) {
        const hashPassword = await (0, bcrypt_1.hash)(userDto.password, 3);
        const user = await this.usersRepository
            .create(Object.assign(Object.assign({}, userDto), { password: hashPassword, id: userDto.id ? userDto.id : (0, uuid_1.v4)() }));
        await user.save();
        if (userDto.login) {
            const token = this.tokensService.generateToken({ login: user.login, id: user.id });
            await this.tokensService.saveToken(user.id, token);
        }
        delete user.password;
        return user;
    }
    async update(userDto, id) {
        const response = await this.usersRepository.update(id, Object.assign({}, userDto));
        if (response.affected === 0) {
            throw new _404error_1.Error404("this user doesn't exist");
        }
        return response;
    }
    async delete(id) {
        const response = await this.usersRepository.delete(id);
        if (response.affected === 0) {
            throw new _404error_1.Error404("this user doesn't exist");
        }
        return response;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_1.UserModel, 'nestJs')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        tokens_service_1.TokensService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map