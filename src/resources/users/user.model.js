import { v4 } from 'uuid';
export class User {
    constructor({ name, login, password, id }) {
        this.id = id || v4();
        this.name = name;
        this.login = login;
        this.password = password;
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
