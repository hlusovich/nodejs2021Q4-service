/**
 * return  Array of Tasks
 * @param there is no param
 * @returns Task[]
 */
import { UserControllerModel } from '../../controllers/userController';
import { UserModel } from '../../entity/user';
import { Error403 } from '../../../Errors/403error';
import { TokenService } from '../token/token.service';

const logIn = async (payload: UserModel) => {
  const user:UserModel|undefined = await UserControllerModel.getUserByLogin(payload.login);
  if(user){
    const token = await TokenService.getToken(user.id);
    if(token){
      return token.token;
    }
      }
  throw new Error403("such user doesn't exist");
};

export {
  logIn
};
