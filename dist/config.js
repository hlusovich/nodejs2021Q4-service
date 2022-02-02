"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET_KEY = exports.DB = exports.POSTGRESS_PORT = exports.SUPER_USER = exports.POSTGRES_PASSWORD = exports.POSTGRES_HOST = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: '.env',
});
exports.PORT = process.env.PORT || '4000';
exports.POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
exports.POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '7081379';
exports.SUPER_USER = process.env.SUPER_USER || 'nikita3';
exports.POSTGRESS_PORT = process.env.POSTGRESS_PORT ? +process.env.POSTGRESS_PORT
    : 5432;
exports.DB = process.env.DB || 'task23apsql';
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret-key';
//# sourceMappingURL=config.js.map