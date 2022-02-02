import { DeleteResult } from 'typeorm';
import { TaskModel } from '../entity/task';
import { TaskDto } from "../tasks/dto/task";
export declare class TaskModelController {
    static getAll(): Promise<TaskModel[]>;
    static getTaskById(id: string): Promise<TaskModel>;
    static createTask(data: TaskDto): Promise<TaskModel>;
    static updateTask(id: string, data: TaskDto): Promise<TaskModel>;
    static deleteTask(id: string): Promise<DeleteResult>;
    static unsubcribeBoard(boardId: string): Promise<DeleteResult>;
}
