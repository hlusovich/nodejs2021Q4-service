import { UserModel } from '../entity/user';
import { UserDto } from "../users/dto/user-dto";
export declare class UserControllerModel {
    static toResponse(user: UserModel): {
        id: string;
        login: string;
        name: string;
    };
    static getAll(): Promise<any>;
    static getUserById(id: string): Promise<UserModel>;
    static getUserByLogin(login: string): Promise<UserModel>;
    static createUser(data: UserDto): Promise<{
        id: string;
        login: string;
        name: string;
    }>;
}
