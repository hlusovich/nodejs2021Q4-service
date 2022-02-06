import { LoginService } from './login.service';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './dto/loginDto';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    create(loginDto: LoginDto): Promise<TokensModel | undefined>;
}
