import { TaskModel } from '../entity/task';
import { TaskDto } from './dto/task';
import { TaskService } from './task.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<TaskModel[]>;
    getOne(id: string): Promise<TaskModel>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string): Promise<void>;
}
