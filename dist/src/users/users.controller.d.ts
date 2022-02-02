import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user-dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<any>;
    getOne(id: string): Promise<import("../entity/user").UserModel>;
    create(userDto: UserDto): Promise<UserDto>;
    update(userDto: UserDto, id: string): Promise<UpdateResult | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
