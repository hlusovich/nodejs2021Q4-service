import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserModel } from '../entity/user';
import { UserDto } from './dto/user-dto';
import { TokensService } from "../token/tokens.service";
export declare class UsersService {
    private usersRepository;
    private tokensService;
    constructor(usersRepository: Repository<UserModel>, tokensService: TokensService);
    getAll(): Promise<any>;
    getOne(id: string): Promise<UserModel>;
    create(userDto: UserDto): Promise<UserDto>;
    update(userDto: UserDto, id: string): Promise<UpdateResult | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
