import { UserDto } from "./dto/user-dto";
export declare class UsersController {
    getAll(): string;
    getOne(params: any): string;
    create(userDto: UserDto): Promise<string>;
}
