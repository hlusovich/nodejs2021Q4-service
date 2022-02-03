import { DeleteResult } from 'typeorm';
import { ITask, TaskDto } from './dto/task';
import { TaskModel } from '../entity/task';
export declare class TaskService {
    getAll(): Promise<ITask[]>;
    getOne(id: string): Promise<ITask>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
