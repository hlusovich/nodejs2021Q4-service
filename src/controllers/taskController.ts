import { DeleteResult, UpdateResult } from 'typeorm';
import { Task } from '../resources/tasks/task.model';
import { TaskModel } from '../entity/task';
import { Error404 } from '../../Errors/404error';
import { UserControllerModel } from './userController';
import { ITask } from '../resources/tasks/interfaces';
import { BoardsModelController } from './boardContoller';

export class TaskModelController {
  /**
   * return  Array of Tasks
   * @param there is no param
   * @returns Task[]
   */
  static async getAll(): Promise<TaskModel[]> {
    const result = await TaskModel.query('SELECT * FROM tasks');
    return result;
  }

  /**
   * return  Task by id
   * @param id:string
   * @returns Task or if no Task with such id throw error
   */
  static async getTaskById(id: string):Promise<TaskModel> {
    const tasks = await this.getAll();
    const task = tasks.find((item) => item.id === id);
    if (!task) {
      throw new Error404('suck tusk doesn\'t exists');
    }
    return task;
  }

  /**
   * return  Fresh created Task
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @param boardId:string
   * @returns Task
   */
  static async createTask(data: ITask): Promise<TaskModel> {
    let user = null;
    if (data.userId) {
      user = await UserControllerModel.getUserById(data.userId);
    }
    const task = await TaskModel.create({
      ...data, userId: user,
    });
    await task.save();
    const result = await this.getTaskById(task.id);
    return result;
  }

  /**
   * return  Fresh updated Task
   * @param id:string
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @returns Task
   */
  static async updateTask(id: string, data: ITask): Promise<TaskModel> {
    if (data.userId) {
      const user = await UserControllerModel.getUserById(data.userId);
      await TaskModel.update(id, { ...data, userId: user });
    } else {
      const oldTask = await this.getTaskById(id);
      await TaskModel.update(id, { ...data, userId: oldTask.userId });
    }
    const result = await this.getTaskById(id);
    return result;
  }

  /**
   * Delete task by id
   * @param id:string
   * @returns string with deleted board id
   */
  static async deleteTask(id: string): Promise<DeleteResult> {
    const result = await TaskModel.delete(id);
    return result;
  }

  static async unsubcribeBoard(boardId: string): Promise<DeleteResult> {
    const result = await TaskModel.delete({ boardId });
    return result;
  }
}
