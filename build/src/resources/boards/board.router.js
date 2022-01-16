
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("../../app.js");
const board_service_js_1 = require("./board.service.js");
const routeCreater_js_1 = require("../../../utils/routeCreater.js");

const routes = [(0, routeCreater_js_1.createRoute)('GET', '/boards', () => (0, board_service_js_1.getAll)()),
    (0, routeCreater_js_1.createRoute)('GET', '/boards/{id}', (req) => (0, board_service_js_1.getBoardById)(req.params.id)),
    (0, routeCreater_js_1.createRoute)('POST', '/boards', (req) => (0, board_service_js_1.createBoard)(req.payload)),
    (0, routeCreater_js_1.createRoute)('PUT', '/boards/{id}', (req) => (0, board_service_js_1.updateBoard)(req.params.id, req.payload)),
    (0, routeCreater_js_1.createRoute)('DELETE', '/boards/{id}', (req) => (0, board_service_js_1.deleteBoard)(req.params.id))
];
app_js_1.server.route(routes);
exports.default = app_js_1.server;
// # sourceMappingURL=board.router.js.map