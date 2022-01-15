"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("../../app.js");
var board_service_js_1 = require("./board.service.js");
var routeCreater_js_1 = require("../../../utils/routeCreater.js");
var routes = [(0, routeCreater_js_1.createRoute)('GET', '/boards', function () { return (0, board_service_js_1.getAll)(); }),
    (0, routeCreater_js_1.createRoute)('GET', '/boards/{id}', function (req) { return (0, board_service_js_1.getBoardById)(req.params.id); }),
    (0, routeCreater_js_1.createRoute)('POST', '/boards', function (req) { return (0, board_service_js_1.createBoard)(req.payload); }),
    (0, routeCreater_js_1.createRoute)('PUT', '/boards/{id}', function (req) { return (0, board_service_js_1.updateBoard)(req.params.id, req.payload); }),
    (0, routeCreater_js_1.createRoute)('DELETE', '/boards/{id}', function (req) { return (0, board_service_js_1.deleteBoard)(req.params.id); })
];
app_js_1.server.route(routes);
exports.default = app_js_1.server;
