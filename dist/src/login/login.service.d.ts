import { TokensModel } from '../entity/tokens';
import { LoginDto } from './loginDto';
import { Repository } from "typeorm";
import { UserModel } from "../entity/user";
export declare class LoginService {
    private userssRepository;
    constructor(userssRepository: Repository<UserModel>);
    logIn(payload: LoginDto): Promise<TokensModel | undefined>;
}
