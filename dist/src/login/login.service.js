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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const user_1 = require("../entity/user");
const _403error_1 = require("../../Errors/403error");
const tokens_service_1 = require("../token/tokens.service");
let LoginService = class LoginService {
    constructor(userssRepository, tokensService) {
        this.userssRepository = userssRepository;
        this.tokensService = tokensService;
    }
    async logIn(payload) {
        const user = await this.userssRepository.findOne({ login: payload.login });
        if (!user) {
            throw new _403error_1.Error403('such user doesn\'t exist');
        }
        const isPassEquals = await (0, bcrypt_1.compare)(payload.password, user.password);
        if (!isPassEquals) {
            throw new _403error_1.Error403('such user doesn\'t exist');
        }
        const token = await this.tokensService.getToken(user.id);
        if (token) {
            return token;
        }
        return undefined;
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.UserModel, 'nestJs')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        tokens_service_1.TokensService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map