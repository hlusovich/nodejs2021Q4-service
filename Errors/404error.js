export class Error404 extends Error {
    constructor({ message }) {
        super();
        this.message = message;
    }
}
