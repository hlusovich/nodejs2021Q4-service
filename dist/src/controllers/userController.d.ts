import { UserModel } from '../entity/user';
import { UserDto } from "../users/dto/user-dto";
export declare class UserControllerModel {
    static getUserById(id: string): Promise<UserModel>;
    static createUser(data: UserDto): Promise<any>;
}
