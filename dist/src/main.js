"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("../config");
const dbCreater_1 = require("../utils/dbCreater");
const MyLogger_1 = require("./users/MyLogger");
const createSuperUserUtil_1 = require("../utils/createSuperUserUtil");
async function startServer() {
    process.on('uncaughtException', () => {
        MyLogger_1.logger.error('we have an uncaughtException');
    });
    process.on('unhandledRejection', (error) => {
        MyLogger_1.logger.error(error);
        MyLogger_1.logger.error('we have an unhandledRejection');
    });
    MyLogger_1.logger.log(`Server successfully started on port ${config_1.PORT}`);
}
async function createDBConnection() {
    try {
        await (0, dbCreater_1.dbCreater)();
        await startServer();
        await (0, createSuperUserUtil_1.createSuperUser)();
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