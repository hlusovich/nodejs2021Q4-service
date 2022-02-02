import { UserModel } from '../entity/user';

export class UserControllerModel {
  /**
     * return  Array of Users
     * @param there is no param
     * @returns User[]
     */
  static async getAll() {
    const result = await UserModel.query('SELECT * FROM users');
    return result;
  }

  /**
     * return  User by id
     * @param id:string
     * @returns User or if no User with such id throw error
     */
  static async getUserById(id: string) {
    const user = await UserModel.findOne(id);
    return user;
  }

  static async getUserByLogin(login: string) {
    const user = await UserModel.findOne({ login });
    return user;
  }

  /**
     * return  Fresh created User
     * @param payload object with  fields title, id, order, description, boardId, userId, columnId
     * @param boardId:string
     * @returns User
     */

  /**
     * return  Fresh updated User
     * @param id:string
     * @param payload object with  fields title, id, order, description, boardId, userId, columnId
     * @returns User
     */

  /**
     * Delete user by id
     * @param id:string
     * @returns string with deleted board id
     */
}
