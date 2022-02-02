"use strict";
const config_1 = require("./config");
const config = {
    type: 'postgres',
    host: config_1.POSTGRES_HOST,
    username: config_1.SUPER_USER,
    password: config_1.POSTGRES_PASSWORD,
    port: config_1.POSTGRESS_PORT,
    database: config_1.DB,
    synchronize: false,
    logging: false,
    entities: ['srcOld/entity/*.js'],
    cli: {
        migrationsDir: 'migration',
        entitiesDir: 'srcOld/entity',
        subscribersDir: 'srcOld/subscriber',
    },
    migrations: [
        'migration/**/*.ts',
    ],
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map