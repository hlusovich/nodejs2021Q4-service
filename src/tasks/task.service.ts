import {
    Injectable,
} from '@nestjs/common';
import {DeleteResult, Repository} from 'typeorm';
import {ITask, TaskDto} from './dto/task';
import {TaskModel} from '../entity/task';
import {Error404} from '../../Errors/404error';
import {InjectRepository} from "@nestjs/typeorm";
import {UserControllerModel} from "../../utils/controllers/userController";
import {v4} from "uuid";


@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskModel, "nestJs")
                private tasksRepository: Repository<TaskModel>) {

    }
    /**
     * return  Array of TaskModel
     * @param there is no param
     * @returns TaskModel[]
     */
    async getAll(): Promise<TaskModel[]> {
        const result = await this.tasksRepository.query('SELECT * FROM tasks');
        return result;
    }
    /**
     * return  Task by id
     * @param id:string
     * @returns TaskModel or if no Task with such id throw error 404
     */
    async getOne(id: string): Promise<TaskModel> {
        const tasks = await this.getAll();
        const task = tasks.find((item) => item.id === id);
        if (!task) {
            throw new Error404('no such task');
        }
        return task;
    }

    async create(taskDto: TaskDto, boardId: string): Promise<TaskModel | undefined> {
        let user = null;
        if (taskDto.userId) {
            user = await UserControllerModel.getUserById(taskDto.userId);
        }
        const task = await this.tasksRepository.create({
            ...taskDto, userId: user, id: v4(), boardId
        });
        await task.save();
        return task;
    }
    /**
     * return  Fresh updated Task
     * @param id:string
     * @param payload object with  fields title, id, order, description, boardId, userId, columnId
     * @returns Task
     */
    async update(taskDto: TaskDto, id: string): Promise<TaskModel | undefined> {
        if (taskDto.userId) {
            const user = await UserControllerModel.getUserById(taskDto.userId);
            await this.tasksRepository.update(id, { ...taskDto, userId: user });
        } else {
            const oldTask = await this.getOne(id);
            await this.tasksRepository.update(id, { ...taskDto, userId: oldTask.userId });
        }
        const result = await this.getOne(id);
        return result;
    }
    /**
     * Delete task by id
     * @param id:string
     * @returns string with deleted board id
     */
    async delete(id: string): Promise<DeleteResult | undefined> {
        const result = await this.tasksRepository.delete(id);
        if (result.affected === 0) {
            throw new Error404("this task doesn't exist");
        }
        return result;
    }
}
