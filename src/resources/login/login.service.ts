/**
 * return  Array of Tasks
 * @param there is no param
 * @returns Task[]
 */
import { compare } from 'bcrypt';
import { UserControllerModel } from '../../controllers/userController';
import { UserModel } from '../../entity/user';
import { Error403 } from '../../../Errors/403error';
import { TokenService } from '../token/token.service';
import { TokensModel } from '../../entity/tokens';

const logIn = async (payload: UserModel): Promise<TokensModel|undefined> => {
  const user: UserModel | undefined = await UserControllerModel.getUserByLogin(payload.login);
  if (!user) {
    throw new Error403('such user doesn\'t exist');
  }
  const isPassEquals = await compare(payload.password, user.password);
  if (!isPassEquals) {
    throw new Error403('such user doesn\'t exist');
  }
  const token = await TokenService.getToken(user.id);
  if (token) {
    return token;
  }

  return undefined;
};

export {
  logIn,
};
