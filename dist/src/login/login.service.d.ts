import { TokensModel } from "../entity/tokens";
import { LoginDto } from "./loginDto";
declare const logIn: (payload: LoginDto) => Promise<TokensModel | undefined>;
export { logIn, };
