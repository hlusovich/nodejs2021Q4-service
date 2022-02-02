import { Injectable } from '@nestjs/common';
import { LoginController } from '../controllers/loginController';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './loginDto';

/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
@Injectable()
export class LoginService {
  async logIn(payload: LoginDto): Promise<TokensModel | undefined> {
    const token = LoginController.login(payload);
    if (token) {
      return token;
    }
    return undefined;
  }
}
