import { DeleteResult } from "typeorm";
import { TaskModel } from "../entity/task";
import { ITask, TaskDto } from "./dto/task";
import { Response } from "express";
export declare class TasksController {
    getAll(): Promise<ITask[]>;
    getOne(id: string, res: Response): Promise<ITask>;
    create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined>;
    update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined>;
    delete(id: string, res: Response): Promise<DeleteResult | undefined>;
}
