
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const hapi_1 = require("@hapi/hapi");
const config_js_1 = require("../config.js");

exports.server = new hapi_1.Server({
    port: config_js_1.PORT, host: '0.0.0.0',
    "routes": {
        "cors": true
    }
});
// # sourceMappingURL=app.js.map