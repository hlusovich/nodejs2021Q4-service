"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const routeCreater_1 = require("../../utils/routeCreater");
const login_service_1 = require("./login.service");
const routes = [
    (0, routeCreater_1.createRoute)('POST', '/login', (req) => (0, login_service_1.logIn)(req.payload)),
];
app_1.server.route(routes);
exports.default = app_1.server;
//# sourceMappingURL=login.router.js.map