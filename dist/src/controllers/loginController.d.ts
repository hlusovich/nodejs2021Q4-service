import { TokensModel } from '../entity/tokens';
export declare class LoginController {
    static login(payload: LoginDto): Promise<TokensModel | undefined>;
}
