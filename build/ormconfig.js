"use strict";
var config = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "nikita3",
    password: "7081379",
    database: "tester2",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.js"],
    cli: {
        migrationsDir: "src/migration",
        entitiesDir: "src/entity",
        subscribersDir: "src/subscriber"
    },
    migrations: [
        "src/migration/**/*.ts"
    ],
};
module.exports = config;
//# sourceMappingURL=ormconfig.cjs.map
