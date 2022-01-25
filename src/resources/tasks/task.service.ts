import { awaitExpression } from '@babel/types';
import { DeleteResult, UpdateResult } from 'typeorm';
import taskController from './task.memory.repository';
import { Task } from './task.model';
import { TaskModelController } from '../../controllers/taskController';
import { TaskModel } from '../../entity/task';
import { ITask } from './interfaces';

/**
 * return  Array of Tasks
 * @param there is no param
 * @returns Task[]
 */
const getAll = async () => {
  const result = await TaskModelController.getAll();
  return result;
};
/**
 * return  Task by id
 * @param id:string
 * @returns Task or if no Task with such id throw error
 */
const getTaskById = async (id: string) => {
  const result = await TaskModelController.getTaskById(id);
  return result;
};
/**
 * return  Fresh created Task
 * @param payload object with  fields title, id, order, description, boardId, userId, columnId
 * @param boardId:string
 * @returns Task
 */
const createTask = async (data: ITask, id: string): Promise<TaskModel> => {
  const result = await TaskModelController.createTask(taskController.createTask(data, id));
  return result;
};
/**
 * return  Fresh updated Task
 * @param id:string
 * @param payload object with  fields title, id, order, description, boardId, userId, columnId
 * @returns Task
 */
const updateTask = async (id: string, data: ITask): Promise<TaskModel> => {
  const result = await TaskModelController.updateTask(id, data);
  return result;
};
/**
 * Delete task by id
 * @param id:string
 * @returns string with deleted board id
 */
const deleteTask = async (id: string): Promise<DeleteResult> => {
  const result = await TaskModelController.deleteTask(id);
  return result;
};
export {
  getAll, getTaskById, createTask, updateTask, deleteTask,
};
