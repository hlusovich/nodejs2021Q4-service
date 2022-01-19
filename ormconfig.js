"use strict";
var config_js_1 = require("./config.js");
var config = {
    type: 'postgres',
    host: 'localhost',
    username: config_js_1.SUPER_USER,
    password: config_js_1.POSTGRES_PASSWORD,
    port: config_js_1.POSTGRESS_PORT,
    database: config_js_1.DB,
    synchronize: false,
    logging: false,
    entities: ['src/entity/*.js'],
    cli: {
        migrationsDir: 'migration',
        entitiesDir: 'src/entity',
        subscribersDir: 'src/subscriber',
    },
    migrations: [
        'migration/**/*.ts',
    ],
};
module.exports = config;
