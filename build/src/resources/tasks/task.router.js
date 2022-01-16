
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("../../app.js");
const task_service_js_1 = require("./task.service.js");
const routeCreater_js_1 = require("../../../utils/routeCreater.js");

const routes = [(0, routeCreater_js_1.createRoute)('GET', '/boards/{id}/tasks', () => (0, task_service_js_1.getAll)()),
    (0, routeCreater_js_1.createRoute)('GET', '/boards/{id}/tasks/{taskId}', (req) => (0, task_service_js_1.getTaskById)(req.params.taskId)),
    (0, routeCreater_js_1.createRoute)('POST', '/boards/{id}/tasks', (req) => (0, task_service_js_1.createTask)(req.payload, req.params.id)),
    (0, routeCreater_js_1.createRoute)('PUT', '/boards/{id}/tasks/{taskId}', (req) => (0, task_service_js_1.updateTask)(req.params.taskId, req.payload)),
    (0, routeCreater_js_1.createRoute)('DELETE', '/boards/{id}/tasks/{taskId}', (req) => (0, task_service_js_1.deleteTask)(req.params.taskId))
];
app_js_1.server.route(routes);
exports.default = app_js_1.server;
// # sourceMappingURL=task.router.js.map