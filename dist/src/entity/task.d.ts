import { BaseEntity } from 'typeorm';
import { UserModel } from './user';
export declare class TaskModel extends BaseEntity {
    constructor(id: string, title: string, order: number, userId: UserModel | null, boardId: string, columnId: string, description: string);
    id: string;
    title: string;
    userId: UserModel | null;
    boardId: string;
    columnId: string;
    order: number;
    description: string;
}
