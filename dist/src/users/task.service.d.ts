import { ITask, TaskDto } from "./dto/task";
import { TaskModel } from "../entity/task";
import { Response } from "express";
import { DeleteResult } from "typeorm";
export declare class TaskService {
    getAll(): Promise<ITask[]>;
    getOne(id: string, res: Response): Promise<ITask>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string, res: Response): Promise<DeleteResult | undefined>;
}
