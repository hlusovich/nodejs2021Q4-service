import { DeleteResult } from 'typeorm';
import { TaskModel } from '../entity/task';
import { ITask, TaskDto } from './dto/task';
import { TaskService } from './task.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<ITask[]>;
    getOne(id: string): Promise<ITask>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
