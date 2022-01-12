import taskController from './task.memory.repository.js';
import { TaskModelController } from "../../controllers/taskController.js";
const getAll = async () => await TaskModelController.getAll();
const getTaskById = async (id) => await TaskModelController.getTaskById(id);
const createTask = async (data, id) => await TaskModelController.createTask(taskController.createTask(data, id));
const updateTask = async (id, data) => await TaskModelController.updateTask(id, data);
const deleteTask = async (id) => await TaskModelController.deleteTask(id);
export { getAll, getTaskById, createTask, updateTask, deleteTask };
