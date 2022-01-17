import { User } from '../resources/users/user.model.js';
import { UserModel } from '../entity/user.js';
import {hash} from "bcrypt";
import { TokenService } from '../resources/token/token.service';

interface IUser {
    id: string;
    name?: string;
    login?: string;
    password?: string;
}

export class UserControllerModel {
  static toResponse(user:IUser) {
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

  /**
     * return  Fresh created User
     * @param payload object with  fields title, id, order, description, boardId, userId, columnId
     * @param boardId:string
     * @returns User
     */
  static async createUser(data: IUser) {
    if(data.password){
      const hashPassword = await hash(data.password, 3)
      const user = await UserModel.create({...data, password:hashPassword});
      await user.save();
      if(data.login){
        const token =  TokenService.generateToken({login:data.login, id :data.id });
        await TokenService.saveToken(data.id,token);
      }
      return this.toResponse(user);
    }

  }

  /**
     * return  Fresh updated User
     * @param id:string
     * @param payload object with  fields title, id, order, description, boardId, userId, columnId
     * @returns User
     */
  static async updateUser(id: string, data: Omit<IUser, 'id' | 'password'>) {
    const response = await UserModel.update(id, { ...data });
    return response;
  }

  /**
     * Delete user by id
     * @param id:string
     * @returns string with deleted board id
     */
  static async deleteUser(id: string) {
    const response = await UserModel.delete(id);
    return response;
  }
}
