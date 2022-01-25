import { compare } from 'bcrypt';
import { UserModel } from '../entity/user';
import { UserControllerModel } from './userController';
import { Error403 } from '../../Errors/403error';
import { TokenService } from '../resources/token/token.service';
import { TokensModel } from '../entity/tokens';

export class LoginController {
  static async login(payload: UserModel):Promise<TokensModel| undefined> {
    const user: UserModel | undefined = await UserControllerModel.getUserByLogin(payload.login);
    if (!user) {
      throw new Error403('such user doesn\'t exist');
    }
    const isPassEquals = await compare(payload.password, user.password);
    if (!isPassEquals) {
      throw new Error403('such user doesn\'t exist');
    }
    const token = await TokenService.getToken(user.id);
    return token;
  }
}
