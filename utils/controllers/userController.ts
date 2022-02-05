import { UserModel } from '../../src/entity/user';
import {hash} from "bcrypt";
import {TokenService} from "../../src/token/token.service";
import {UserDto} from "../../src/users/dto/user-dto";

export class UserControllerModel {
  static toResponse(user:UserModel) {
    return { id: user.id, login: user.login, name: user.name };
  }

  static async getUserById(id: string) {
    const user = await UserModel.findOne(id);
    return user;
  }

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


}
