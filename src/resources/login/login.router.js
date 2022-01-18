"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("../../app.js");
var routeCreater_js_1 = require("../../../utils/routeCreater.js");
var login_service_1 = require("./login.service");
var routes = [
    (0, routeCreater_js_1.createRoute)('POST', '/login', function (req) { return (0, login_service_1.logIn)(req.payload); }),
];
app_js_1.server.route(routes);
exports.default = app_js_1.server;
