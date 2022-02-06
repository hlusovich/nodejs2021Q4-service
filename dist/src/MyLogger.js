"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.MyLogger = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const loggerConsts = {
    log: 4,
    error: 1,
    debug: 3,
    warn: 2,
};
class MyLogger extends common_1.ConsoleLogger {
    constructor(level) {
        super();
        this.level = level;
    }
    log(message) {
        if (this.level < loggerConsts.log) {
            return;
        }
        super.log(message);
    }
    warn(message) {
        if (this.level < loggerConsts.warn) {
            return;
        }
        super.warn(message);
    }
    debug(message) {
        if (this.level < loggerConsts.debug) {
            return;
        }
        super.debug(message);
    }
    error(message) {
        if (this.level < loggerConsts.error) {
            return;
        }
        super.error(message);
    }
}
exports.MyLogger = MyLogger;
exports.logger = new MyLogger(+config_1.LEVEL);
//# sourceMappingURL=MyLogger.js.map