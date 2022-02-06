import { UserModel } from '../../src/entity/user';
import { UserDto } from "../../src/users/dto/user-dto";
export declare class UserControllerModel {
    static toResponse(user: UserModel): {
        id: string;
        login: string;
        name: string;
    };
    static getUserById(id: string): Promise<UserModel>;
    static createUser(data: UserDto): Promise<{
        id: string;
        login: string;
        name: string;
    }>;
}
