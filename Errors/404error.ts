export class Error404 extends Error {

    constructor({message}:Error) {
        super();
        this.message = message;
    }
}

