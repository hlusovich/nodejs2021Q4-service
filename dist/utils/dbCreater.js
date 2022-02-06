"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbCreater = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const dbCreater = async () => {
    const connection = await (0, typeorm_1.createConnection)({
        name: 'sdf',
        type: 'postgres',
        host: config_1.POSTGRES_HOST,
        username: config_1.SUPER_USER,
        password: config_1.POSTGRES_PASSWORD,
        port: config_1.POSTGRESS_PORT,
        database: 'postgres',
    });
    const queryRunner = connection.createQueryRunner();
    await queryRunner.createDatabase(config_1.DB, true);
};
exports.dbCreater = dbCreater;
//# sourceMappingURL=dbCreater.js.map