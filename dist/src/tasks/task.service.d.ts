import { DeleteResult, Repository } from 'typeorm';
import { TaskDto } from './dto/task';
import { TaskModel } from '../entity/task';
export declare class TaskService {
    private tasksRepository;
    constructor(tasksRepository: Repository<TaskModel>);
    getAll(): Promise<TaskModel[]>;
    getOne(id: string): Promise<TaskModel>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
