"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Logger = (function () {
    function Logger(basePath, errorBasePath) {
        this.loggLevel = +(process.env.LEVEL || 4);
        this.basePath = basePath;
        this.errorBasePath = errorBasePath;
    }
    Logger.prototype.writeLog = function (data) {
        try {
            fs.appendFileSync(this.basePath, "".concat(data, "\n"));
        }
        catch (e) {
            console.log(e);
        }
    };
    Logger.prototype.writeErrorLog = function (data) {
        try {
            fs.appendFileSync(this.errorBasePath, "".concat(data, "\n"));
        }
        catch (e) {
            console.log(e);
        }
    };
    Logger.prototype.log = function (logObject) {
        if (logObject.level > this.loggLevel) {
            return;
        }
        switch (logObject.level) {
            case 0:
                console.error(logObject.message);
                this.writeErrorLog("Error:\n                ".concat(logObject.message));
                break;
            case 1:
                console.warn(logObject.message);
                this.writeLog("Warn:\n                ".concat(logObject.message));
                break;
            case 2:
                console.log(logObject.message);
                this.writeLog("Info:\n                ".concat(logObject.message));
                break;
            case 3:
                console.debug(logObject.message);
                this.writeLog("Debug:\n                ".concat(logObject.message));
                break;
            default:
                console.log(logObject.message);
        }
    };
    return Logger;
}());
exports.default = new Logger('src/logs/allLogs', 'src/logs/errorBaseLogs');
//# sourceMappingURL=Logger.js.map