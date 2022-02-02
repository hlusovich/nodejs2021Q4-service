import {
    Injectable,
} from '@nestjs/common';
import {ITask, TaskDto} from "./dto/task";
import {TaskModel} from "../entity/task";
import {Response} from "express";
import {Error404} from "../../Errors/404error";
import {errorHandler} from "../../utils/errorHandler";
import {TaskModelController} from "../controllers/taskController";
import {DeleteResult} from "typeorm";

@Injectable()
export class TaskService {
    async getAll(): Promise<ITask[]> {
        const result = await TaskModel.query('SELECT * FROM tasks');
        return result;
    }

    async getOne(id: string, res: Response):Promise<ITask> {
        try {
            const tasks = await this.getAll();
            const task = tasks.find((item) => item.id === id);
            if (!task) {
                throw new Error404('no such task');
            }
            return task;
        } catch (e) {
            res.status(errorHandler(e));
            return undefined;
        }
    }

    async create( taskDto: TaskDto,  boardId: string): Promise<TaskModel | undefined> {
        const result = await TaskModelController.createTask({ ...taskDto, boardId });
        return result;
    }

    async update( taskDto: TaskDto,  id: string): Promise<TaskModel | undefined> {
        const result = await TaskModelController.updateTask(id, taskDto);
        return result;
    }

    async delete( id: string,  res: Response): Promise<DeleteResult | undefined> {
        const result = await TaskModelController.deleteTask(id);
        return result;
    }
}
