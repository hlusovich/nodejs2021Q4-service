import { DeleteResult, UpdateResult } from 'typeorm';
import { Task } from '../resources/tasks/task.model';
import { TaskModel } from '../entity/task.js';
import { Error404 } from '../../Errors/404error';

interface ITask {
  title?: string;
  order: number;
  userid?: string;
  boardid?: string;
  columnid?: string;
  description?: string;
}

export class TaskModelController {
  /**
   * return  Array of Tasks
   * @param there is no param
   * @returns Task[]
   */
  static async getAll() {
    const result = await TaskModel.query('SELECT * FROM tasks');
    return result;
  }

  /**
   * return  Task by id
   * @param id:string
   * @returns Task or if no Task with such id throw error
   */
  static async getTaskById(id: string) {
    const task = await TaskModel.findOne(id);
    if (!task) {
      throw new Error404("suck tusk doesn't exists");
    }
    return task;
  }

  /**
   * return  Fresh created Task
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @param boardId:string
   * @returns Task
   */
  static async createTask(data: ITask):Promise<TaskModel> {
    const task = await TaskModel.create({
      ...data,
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
  static async updateTask(id: string, data: ITask):Promise<UpdateResult> {
    const result = await TaskModel.update(id, { ...data });
    return result;
  }

  /**
   * Delete task by id
   * @param id:string
   * @returns string with deleted board id
   */
  static async deleteTask(id: string):Promise<DeleteResult> {
    const result = await TaskModel.delete(id);
    return result;
  }

  static async unsubcribeBoard(boardId: string):Promise<DeleteResult> {
    const result = await TaskModel.delete({ boardId });
    return result;
  }

  static async unsubscribeUser(userId: string):Promise<DeleteResult> {
    const result = await TaskModel.update({ userId }, { userId: null });
    return result;
  }
}
