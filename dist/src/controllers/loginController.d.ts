import { UserModel } from '../entity/user';
import { TokensModel } from '../entity/tokens';

export declare class LoginController {
  static login(payload: UserModel): Promise<TokensModel | undefined>;
}
