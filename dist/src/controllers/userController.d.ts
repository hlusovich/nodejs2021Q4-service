import { UserModel } from '../entity/user';
export declare class UserControllerModel {
    static getAll(): Promise<any>;
    static getUserById(id: string): Promise<UserModel>;
    static getUserByLogin(login: string): Promise<UserModel>;
}
