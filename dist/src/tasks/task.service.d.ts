import { DeleteResult, Repository } from 'typeorm';
import { TaskDto } from './dto/task';
import { TaskModel } from '../entity/task';
import { UserModel } from "../entity/user";
export declare class TaskService {
    private tasksRepository;
    private usersRepository;
    constructor(tasksRepository: Repository<TaskModel>, usersRepository: Repository<UserModel>);
    getAll(): Promise<TaskModel[]>;
    getOne(id: string): Promise<TaskModel>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
