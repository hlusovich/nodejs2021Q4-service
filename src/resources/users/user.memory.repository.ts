import { User } from './user.model.js';

export class UserController {
  /**
   * return  User by id
   * @param id:string
   * @returns Omit<User, 'password'>  or if no Task with such id throw error
   */

  /**
   * return  Fresh created User
   * @param payload object with  fields name: string; login: string; password: string; id: string
   * @returns Omit<User, 'password'>
   */
  static createUser(payload: User): User {
    const user = new User(payload);
    return user;
  }

  /**
   * return  Fresh updated user
   * @param id:string
   * @param payload object with  fields name: string; login: string; password: string; id: string
   * @returns Omit<User, 'password'> or throw custom Error404
   */

  /**
   * Delete user by id
   * @param id:string
   * @returns string with deleted user id or if no user with such id
     throw custom error (instance of Error404)
   */
}
