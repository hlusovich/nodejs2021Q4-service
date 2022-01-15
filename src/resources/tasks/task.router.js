"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("../../app.js");
var task_service_js_1 = require("./task.service.js");
var routeCreater_js_1 = require("../../../utils/routeCreater.js");
var routes = [(0, routeCreater_js_1.createRoute)('GET', '/boards/{id}/tasks', function () { return (0, task_service_js_1.getAll)(); }),
    (0, routeCreater_js_1.createRoute)('GET', '/boards/{id}/tasks/{taskId}', function (req) { return (0, task_service_js_1.getTaskById)(req.params.taskId); }),
    (0, routeCreater_js_1.createRoute)('POST', '/boards/{id}/tasks', function (req) { return (0, task_service_js_1.createTask)(req.payload, req.params.id); }),
    (0, routeCreater_js_1.createRoute)('PUT', '/boards/{id}/tasks/{taskId}', function (req) { return (0, task_service_js_1.updateTask)(req.params.taskId, req.payload); }),
    (0, routeCreater_js_1.createRoute)('DELETE', '/boards/{id}/tasks/{taskId}', function (req) { return (0, task_service_js_1.deleteTask)(req.params.taskId); })
];
app_js_1.server.route(routes);
exports.default = app_js_1.server;
