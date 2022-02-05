import { UserModel } from '../entity/user';
import {hash} from "bcrypt";
import {TokenService} from "../token/token.service";
import {UserDto} from "../users/dto/user-dto";

export class UserControllerModel {
  static toResponse(user:UserModel) {
    return { id: user.id, login: user.login, name: user.name };
  }
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
  static async createUser(data: UserDto) {
    if (data.password) {
      const hashPassword = await hash(data.password, 3);
      const user = await UserModel.create({ ...data, password: hashPassword });
      await user.save();
      if (data.login) {
        const token = TokenService.generateToken({ login: data.login, id: data.id });
        await TokenService.saveToken(data.id, token);
      }
      return this.toResponse(user);
    }
    return undefined;
  }

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
