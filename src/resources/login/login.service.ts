import { UserModel } from '../../entity/user';

import { TokensModel } from '../../entity/tokens';
import { LoginController } from '../../controllers/loginController';
/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
const logIn = async (payload: UserModel): Promise<TokensModel|undefined> => {
  const token = LoginController.login(payload);
  if (token) {
    return token;
  }
  return undefined;
};

export {
  logIn,
};
