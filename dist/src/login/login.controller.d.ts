import { TokensModel } from "../entity/tokens";
import { LoginDto } from './loginDto';
export declare class LoginController {
    create(loginDto: LoginDto, boardId: string): Promise<TokensModel | undefined>;
}
