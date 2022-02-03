import {
    Injectable,
} from '@nestjs/common';
import {Response} from 'express';
import {DeleteResult} from 'typeorm';
import {ITask, TaskDto} from './dto/task';
import {TaskModel} from '../entity/task';
import {Error404} from '../../Errors/404error';
import {errorHandler} from '../../utils/errorHandler';
import {TaskModelController} from '../controllers/taskController';

@Injectable()
export class TaskService {
    async getAll(): Promise<ITask[]> {
        const result = await TaskModel.query('SELECT * FROM tasks');
        return result;
    }

    async getOne(id: string): Promise<ITask> {
        const tasks = await this.getAll();
        const task = tasks.find((item) => item.id === id);
        if (!task) {
            throw new Error404('no such task');
        }
      return task;
    }

    async create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined> {
        const result = await TaskModelController.createTask({...taskDto, boardId});
        return result;
    }

    async update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined> {
        const result = await TaskModelController.updateTask(id, taskDto);
        return result;
    }

    async delete(id: string): Promise<DeleteResult | undefined> {
        const result = await TaskModelController.deleteTask(id);
        if(result.affected===0){
          throw new Error404("this task doesn't exist");
        }
        return result;
    }
}
