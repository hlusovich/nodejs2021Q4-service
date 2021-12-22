interface ILogObject {
    level:number;
    message:string;

}
export class Logger {
    loggLevel:number;
    constructor(){
        this.loggLevel = +process.env.LEVEL || 4;
    }
    log(logObject:ILogObject):void{
        if(logObject.level<=this.loggLevel){
            return
        }
        switch (logObject.level) {
            case 0:
                console.error(logObject.message);
                break;
            case 1:
                console.warn(logObject.message);
                break;
            case 2:
                console.log(logObject.message);
                break;
            case 3:
                console.debug(logObject.message);
                break;
            default:
                console.log(logObject.message);

        }

    }
}
