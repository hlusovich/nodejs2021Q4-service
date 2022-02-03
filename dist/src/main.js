"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const app_module_1 = require("./app.module");
const config_1 = require("../config");
const tokens_1 = require("./entity/tokens");
const task_1 = require("./entity/task");
const user_1 = require("./entity/user");
const board_1 = require("./entity/board");
const dbCreater_1 = require("../utils/dbCreater");
const MyLogger_1 = require("./users/MyLogger");
const file_1 = require("./entity/file");
const testUser = { login: 'admin', name: 'admin', password: 'admin' };
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
async function startServer() {
    process.on('uncaughtException', () => {
        MyLogger_1.logger.error('we have an uncaughtException');
    });
    process.on('unhandledRejection', (error) => {
        MyLogger_1.logger.error('we have an unhandledRejection');
    });
    MyLogger_1.logger.log(`Server successfully started on port ${config_1.PORT}`);
}
async function createDBConnection() {
    try {
        await (0, dbCreater_1.dbCreater)();
        await (0, typeorm_1.createConnection)(options).then(async (serverInstance) => {
            await user_1.UserModel.create(testUser);
            await serverInstance.runMigrations();
            await startServer();
        });
    }
    catch (e) {
        MyLogger_1.logger.error(e);
        MyLogger_1.logger.error({ message: 'we have an error when trying to connect ot db', level: 0 });
    }
}
async function bootstrap() {
    await createDBConnection();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: ['log', 'error', 'warn', 'debug'] });
    await app.listen(config_1.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map