"use strict";
var path_1 = require("path");
var config = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "nikita3",
    password: "7081379",
    database: "tester2",
    entities: [(0, path_1.join)(__dirname, 'src/entity/**/*.{.js, .ts}')],
    migrationsRun: true,
    cli: {
        migrationsDir: 'migrations',
    }
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map
