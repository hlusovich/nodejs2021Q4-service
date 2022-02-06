import { TokensModel } from '../entity/tokens';
import { UserDto } from '../users/dto/user-dto';
import { Repository } from "typeorm";
export declare class TokensService {
    private tokensRepository;
    constructor(tokensRepository: Repository<TokensModel>);
    generateToken(payload: Omit<UserDto, 'password' | 'name'>): string;
    saveToken(userId: string | undefined, newToken: string): Promise<TokensModel>;
    getToken(id: string): Promise<TokensModel>;
}
