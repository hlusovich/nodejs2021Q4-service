import * as fs from 'fs';
class Logger {
    constructor(basePath, errorBasePath) {
        this.loggLevel = +(process.env.LEVEL || 4);
        this.basePath = basePath;
        this.errorBasePath = errorBasePath;
    }
    writeLog(data) {
        try {
            fs.appendFileSync(this.basePath, `${data}\n`);
            console.log(fs.readFileSync(this.basePath, { encoding: 'utf8', flag: 'r' }));
        }
        catch (e) {
            console.log(e);
        }
    }
    writeErrorLog(data) {
        try {
            fs.appendFileSync(this.errorBasePath, `${data}\n`);
        }
        catch (e) {
            console.log(e);
        }
    }
    log(logObject) {
        if (logObject.level > this.loggLevel) {
            return;
        }
        switch (logObject.level) {
            case 0:
                console.error(logObject.message);
                this.writeErrorLog(`Error:
                ${logObject.message}`);
                break;
            case 1:
                console.warn(logObject.message);
                this.writeLog(`Warn:
                ${logObject.message}`);
                break;
            case 2:
                console.log(logObject.message);
                this.writeLog(`Info:
                ${logObject.message}`);
                break;
            case 3:
                console.debug(logObject.message);
                this.writeLog(`Debug:
                ${logObject.message}`);
                break;
            default:
                console.log(logObject.message);
        }
    }
}
export default new Logger('src/logs/allLogs', 'src/logs/errorBaseLogs');
