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
exports.TokensService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../config");
const tokens_1 = require("../entity/tokens");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TokensService = class TokensService {
    constructor(tokensRepository) {
        this.tokensRepository = tokensRepository;
    }
    generateToken(payload) {
        const accessToken = (0, jsonwebtoken_1.sign)(Object.assign(Object.assign({}, payload), { userId: payload.id }), config_1.JWT_SECRET_KEY);
        return accessToken;
    }
    async saveToken(userId, newToken) {
        const tokenData = await this.tokensRepository.findOne({ userId });
        if (tokenData) {
            tokenData.token = newToken;
            const result = await tokenData.save();
            return result;
        }
        const createdTokenData = await this.tokensRepository.create({ userId, token: newToken });
        const result = await createdTokenData.save();
        return result;
    }
    async getToken(id) {
        const token = await this.tokensRepository.findOne({ userId: id });
        return token;
    }
};
TokensService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tokens_1.TokensModel, "nestJs")),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TokensService);
exports.TokensService = TokensService;
//# sourceMappingURL=tokens.service.js.map