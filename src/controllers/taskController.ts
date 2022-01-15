import { Task } from '../resources/tasks/task.model';
import { TaskModel } from '../entity/task.js';
import {DeleteResult, UpdateResult} from "typeorm";

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
   return await TaskModel.query("SELECT * FROM tasks");
  };

  /**
   * return  Task by id
   * @param id:string
   * @returns Task or if no Task with such id throw error
   */
 static async getTaskById(id: string) {
   const task = await TaskModel.findOne(id);
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
      ...data
    });
    await task.save();
    return  task;

  };

  /**
   * return  Fresh updated Task
   * @param id:string
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @returns Task
   */
  static async updateTask(id: string, data: ITask):Promise<UpdateResult> {
    return await TaskModel.update(id, { ...data });
  };

  /**
   * Delete task by id
   * @param id:string
   * @returns string with deleted board id
   */
 static async deleteTask(id: string):Promise<DeleteResult> {
   return await TaskModel.delete(id);
  };
  static async unsubcribeBoard(boardId: string):Promise<DeleteResult> {
    return await TaskModel.delete({boardId});
  };
  static async unsubscribeUser(userId: string):Promise<DeleteResult> {
    return await TaskModel.update({userId}, {userId:null});
  };
}
