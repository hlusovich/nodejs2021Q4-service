"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTGRESS_PORT = exports.SUPER_USER = exports.POSTGRES_PASSWORD = exports.PORT = void 0;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: '.env'
});
exports.PORT = process.env.PORT || '4000';
exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
exports.SUPER_USER = process.env.SUPER_USER;
exports.POSTGRESS_PORT = process.env.POSTGRESS_PORT ? +process.env.POSTGRESS_PORT : undefined;
//# sourceMappingURL=config.js.map