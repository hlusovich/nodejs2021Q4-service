import { UserDto } from "./dto/user-dto";
import { UserModel } from "../entity/user";
import { DeleteResult, UpdateResult } from "typeorm";
export declare class UsersController {
    getAll(): Promise<any>;
    getOne(id: string): Promise<UserModel>;
    create(userDto: UserDto): Promise<UserDto>;
    update(userDto: UserDto, id: string): Promise<UpdateResult | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
