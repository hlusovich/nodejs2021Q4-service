import { Repository } from 'typeorm';
import { TokensModel } from '../entity/tokens';
import { LoginDto } from './dto/loginDto';
import { UserModel } from '../entity/user';
import { TokensService } from '../token/tokens.service';
export declare class LoginService {
    private userssRepository;
    private tokensService;
    constructor(userssRepository: Repository<UserModel>, tokensService: TokensService);
    logIn(payload: LoginDto): Promise<TokensModel | undefined>;
}
