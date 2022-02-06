"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuperUser = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const task_1 = require("../src/entity/task");
const user_1 = require("../src/entity/user");
const board_1 = require("../src/entity/board");
const tokens_1 = require("../src/entity/tokens");
const file_1 = require("../src/entity/file");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const testUser = { login: 'admin', name: 'admin', password: 'admin', id: "1" };
const options = {
    type: 'postgres',
    host: config_1.POSTGRES_HOST,
    username: config_1.SUPER_USER,
    password: config_1.POSTGRES_PASSWORD,
    port: config_1.POSTGRESS_PORT,
    synchronize: true,
    database: config_1.DB,
    entities: [task_1.TaskModel, user_1.UserModel, board_1.BoardModel, tokens_1.TokensModel, file_1.FileModel],
};
async function createSuperUser() {
    await (0, typeorm_1.createConnection)(options).then(async (serverInstance) => {
        if (!await user_1.UserModel.findOne(testUser.id)) {
            const hashPassword = await (0, bcrypt_1.hash)(testUser.password, 3);
            const user = await user_1.UserModel.create(Object.assign(Object.assign({}, testUser), { password: hashPassword }));
            await user.save();
            const accessToken = (0, jsonwebtoken_1.sign)({ login: testUser.login, userId: testUser.id }, config_1.JWT_SECRET_KEY);
            const tokenData = await tokens_1.TokensModel.findOne({ userId: testUser.id });
            if (tokenData) {
                return;
            }
            const createdTokenData = await tokens_1.TokensModel.create({ userId: testUser.id, token: accessToken });
            await createdTokenData.save();
        }
    });
}
exports.createSuperUser = createSuperUser;
//# sourceMappingURL=createSuperUserUtil.js.map