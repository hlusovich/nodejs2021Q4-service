import taskController from './task.memory.repository.js';
import { Task } from './task.model';
import {TaskModelController} from "../../controllers/taskController.js";
import {awaitExpression} from "@babel/types";
import {DeleteResult, UpdateResult} from "typeorm";
import {TaskModel} from "../../entity/task";
/**
 * return  Array of Tasks
 * @param there is no param
 * @returns Task[]
 */
const getAll = async () => await TaskModelController.getAll();
/**
 * return  Task by id
 * @param id:string
 * @returns Task or if no Task with such id throw error
 */
const getTaskById = async (id:string) => await TaskModelController.getTaskById(id);
/**
 * return  Fresh created Task
 * @param payload object with  fields title, id, order, description, boardId, userId, columnId
 * @param boardId:string
 * @returns Task
 */
const createTask = async (data:Task,id:string):Promise<TaskModel> => await TaskModelController.createTask(taskController.createTask(data,id));
/**
 * return  Fresh updated Task
 * @param id:string
 * @param payload object with  fields title, id, order, description, boardId, userId, columnId
 * @returns Task
 */
const updateTask = async (id:string, data:Task):Promise<UpdateResult> => await TaskModelController.updateTask(id, data);
/**
 * Delete task by id
 * @param id:string
 * @returns string with deleted board id
 */
const deleteTask = async (id:string):Promise<DeleteResult>  => await TaskModelController.deleteTask(id);

export { getAll, getTaskById, createTask, updateTask, deleteTask };




