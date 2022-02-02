import { TokensModel } from '../entity/tokens';
import { LoginDto } from './loginDto';
export declare class LoginService {
    logIn(payload: LoginDto): Promise<TokensModel | undefined>;
}
