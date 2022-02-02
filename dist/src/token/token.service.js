"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../config");
const tokens_1 = require("../entity/tokens");
class TokenService {
    static generateToken(payload) {
        const accessToken = (0, jsonwebtoken_1.sign)(Object.assign(Object.assign({}, payload), { userId: payload.id }), config_1.JWT_SECRET_KEY);
        return accessToken;
    }
    static async saveToken(userId, newToken) {
        const tokenData = await tokens_1.TokensModel.findOne({ userId });
        if (tokenData) {
            tokenData.token = `Bearer ${newToken}`;
            const result = await tokenData.save();
            return result;
        }
        const createdTokenData = await tokens_1.TokensModel.create({ userId, token: newToken });
        const result = await createdTokenData.save();
        return result;
    }
    static async getToken(id) {
        const token = await tokens_1.TokensModel.findOne({ userId: id });
        return token;
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map