import { User } from './user.model.js';
import { Error404 } from '../../../Errors/404error.js';

class UserController {
    constructor(users = []) {
        this.users = users;
    }

    getAll() {
        return this.users.map(item => User.toResponse(item));
    }

    getUser(id) {
        const user = this.users.find(item => item.id === id);
        if (user) {
            return User.toResponse(user);
        }
        throw new Error404('User not found');
    }

    createUser(payload) {
        const user = new User(payload);
        this.users.push(user);
        return User.toResponse(user);
    }

    updateUser(id, payload) {
        this.getUser(id);
        let user = null;
        this.users = this.users.map(item => {
            if (item.id === id) {
                user = new User({...item, ...payload});
                return user;
            }
            return item;
        });
        if (user) {
            return User.toResponse(user);
        }
        throw new Error404('User not found');
    }

    deleteUser(id) {
        this.getUser(id);
        this.users = this.users.filter(item => item.id !== id);
        return `User with ${id} was successfully  deleted`;
    }
}
export default new UserController();
