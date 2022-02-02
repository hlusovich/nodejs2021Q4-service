import { BaseEntity } from 'typeorm';
export declare class UserModel extends BaseEntity {
    constructor(id: string, name: string, login: string, password: string);
    id: string;
    name: string;
    login: string;
    password: string;
}
