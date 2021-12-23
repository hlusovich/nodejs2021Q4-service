import taskController from './task.memory.repository.js';
import { Task } from './task.model';

/**
 * return  Array of Tasks
 * @param there is no param
 * @returns Task[]
 */
const getAll = () => taskController.getAll();
/**
 * return  Task by id
 * @param id:string
 * @returns Task or if no Task with such id throw error
 */
const getTaskById = (id:string) => taskController.getTask(id);
/**
 * return  Fresh created Task
 * @param payload object with  fields title, id, order, description, boardId, userId, columnId
 * @param boardId:string
 * @returns Task
 */
const createTask = (data:Task,id:string) => taskController.createTask(data,id);
/**
 * return  Fresh updated Task
 * @param id:string
 * @param payload object with  fields title, id, order, description, boardId, userId, columnId
 * @returns Task
 */
const updateTask = (id:string, data:Task): Task => taskController.updateTask(id, data);
/**
 * Delete task by id
 * @param id:string
 * @returns string with deleted board id
 */
const deleteTask = (id:string):string|never  => taskController.deleteTask(id);

export { getAll, getTaskById, createTask, updateTask, deleteTask };




