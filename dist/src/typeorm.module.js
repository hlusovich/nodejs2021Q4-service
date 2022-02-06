"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeormModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("../config");
const task_1 = require("./entity/task");
const user_1 = require("./entity/user");
const board_1 = require("./entity/board");
const tokens_1 = require("./entity/tokens");
const file_1 = require("./entity/file");
let TypeormModule = class TypeormModule {
};
TypeormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: config_1.POSTGRES_HOST,
                username: config_1.SUPER_USER,
                password: config_1.POSTGRES_PASSWORD,
                port: config_1.POSTGRESS_PORT,
                synchronize: true,
                database: config_1.DB,
                entities: [task_1.TaskModel, user_1.UserModel, board_1.BoardModel, tokens_1.TokensModel, file_1.FileModel, tokens_1.TokensModel],
                name: 'nestJs',
            }),
        ],
    })
], TypeormModule);
exports.TypeormModule = TypeormModule;
//# sourceMappingURL=typeorm.module.js.map