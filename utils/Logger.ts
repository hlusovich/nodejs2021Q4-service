import * as fs from 'fs';

interface ILogObject {
    level: number;
    message: string;

}

class Logger {
    loggLevel: number;
    basePath: string;
    errorBasePath: string;
    constructor(basePath:string, errorBasePath:string) {
        this.loggLevel = +(process.env.LEVEL || 4);
        this.basePath = basePath;
        this.errorBasePath =  errorBasePath;
    }
    writeLog(data:string){
      try{
          fs.appendFileSync(this.basePath,data+'\n');
        }
        catch (e) {
            console.log(e)
        }
    }
    writeErrorLog(data:string){
        try{
            fs.appendFileSync(this.errorBasePath,data+'\n');
        }
        catch (e) {
            console.log(e)
        }
    }
    log(logObject: ILogObject): void {
        if (logObject.level > this.loggLevel) {
            return
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

export default new Logger('allLogs', 'errorBaseLogs');
