import { LoginService } from './login.service';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './loginDto';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    create(loginDto: LoginDto, boardId: string): Promise<TokensModel | undefined>;
}
