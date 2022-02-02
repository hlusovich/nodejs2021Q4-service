import { TokensModel } from '../entity/tokens';
import { LoginDto } from '../login/loginDto';
export declare class LoginController {
    static login(payload: LoginDto): Promise<TokensModel | undefined>;
}
