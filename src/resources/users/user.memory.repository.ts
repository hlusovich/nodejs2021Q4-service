import { User } from './user.model.js';
import { Error404 } from '../../../Errors/404error.js';

interface IUser {
  name: string;
  login: string;
  password: string;
  id: string
}

class UserController {
  users: IUser[];

  constructor(users = []) {
    this.users = users;
  }

  /**
   * return  Array of users without password
   * @param there is no param
   * @returns  Omit<IUser, 'password'>[]
   */

  getAll(): Omit<IUser, 'password'>[] {
    return this.users.map(item => User.toResponse(item));
  }

  /**
   * return  User by id
   * @param id:string
   * @returns Omit<IUser, 'password'>  or if no Task with such id throw error
   */

  getUser(id: string): Omit<IUser, 'password'> | never {
    const user = this.users.find(item => item.id === id);
    if (user) {
      return User.toResponse(user);
    }
    throw new Error404('User not found');

  }

  /**
   * return  Fresh created User
   * @param payload object with  fields name: string; login: string; password: string; id: string
   * @returns Omit<IUser, 'password'>
   */
  createUser(payload: IUser): Omit<IUser, 'password'> {
    const user = new User(payload);
    this.users.push(user);
    return user;
  }

  /**
   * return  Fresh updated user
   * @param id:string
   * @param payload object with  fields name: string; login: string; password: string; id: string
   * @returns Omit<IUser, 'password'> or throw custom Error404
   */

  updateUser(id: string, payload: Omit<IUser, 'password'>): Omit<IUser, 'password'> | never {
    this.getUser(id);
    let user = null;
    this.users = this.users.map(item => {
      if (item.id === id) {
        user = new User({ ...item, ...payload });
        return user;
      }
      return item;
    });
    if (user) {
      return User.toResponse(user);
    }
    throw  new Error404('User not found');
  }

  /**
   * Delete user by id
   * @param id:string
   * @returns string with deleted user id or if no user with such id
     throw custom error (instance of Error404)
   */

  deleteUser(id: string): string | never {
    this.getUser(id);
    this.users = this.users.filter(item => item.id !== id);
    return `User with ${id} was successfully  deleted`;
  }
}

export default new UserController();
