import { compare } from 'bcrypt';
import { UserModel } from '../entity/user';
import { UserControllerModel } from './userController';
import { Error403 } from '../../Errors/403error';
import { TokenService } from '../token/token.service';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from '../login/loginDto';

export class LoginController {
  static async login(payload: LoginDto):Promise<TokensModel| undefined> {
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
