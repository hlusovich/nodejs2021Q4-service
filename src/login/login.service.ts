
import {LoginController} from "../controllers/loginController";
import {TokensModel} from "../entity/tokens";
import {LoginDto} from "./loginDto";

/**
 * @param payload: UserModel:
 * @returns Promise<TokensModel|undefined>
 */
const logIn = async (payload: LoginDto): Promise<TokensModel|undefined> => {
  const token = LoginController.login(payload);
  if (token) {
    return token;
  }
  return undefined;
};

export {
  logIn,
};
