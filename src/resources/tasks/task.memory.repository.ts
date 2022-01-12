import { Task } from './task.model.js';
import { Error404 } from '../../../Errors/404error.js';


class TasksController {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  /**
   * return  Array of Tasks
   * @param there is no param
   * @returns Task[]
   */

  getAll(): Task[] {
    return this.tasks;
  }

  /**
   * return  Task by id
   * @param id:string
   * @returns Task or if no Task with such id throw error (custom Error404)
   */
  getTask(id: string): Task | never {
    const task = this.tasks.find(item => item.id === id);
    if (task) {
      return task;
    }
    throw new Error404('Not found');

  }

  /**
   * return  Fresh created Task
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @param boardId:string
   * @returns Task
   */
  createTask(payload: Task, boardid: string): Task {
    const newTask = new Task({ ...payload, boardid });
    this.tasks.push(newTask);
    return newTask;
  }

  /**
   * return  Fresh updated Task
   * @param id:string
   * @param payload object with  fields title, id, order, description, boardId, userId, columnId
   * @returns Task
   */
  updateTask(id: string, payload: Task): Task {
    this.tasks = this.tasks.map(item => {
      if (item.id === id) {
        return new Task({ ...item, ...payload });
      }
      return item;
    });
    return this.getTask(id);
  }

  /**
   * Delete task by id
   * @param id:string
   * @returns string with deleted task id or if
    no task with such id throw custom error (instance of Error404)
   */
  deleteTask(id: string): string | never {
    this.getTask(id);
    this.tasks = this.tasks.filter(item => item.id !== id);
    return `Task with ${id} deleted`;
  }

  /**
   * Change userId to null, if user with this is deleted
   * @param id:string
   * @returns void
   */
  unsubscribeUser(id: string): void {
    this.tasks = this.tasks.map(item => {
      if (item.userid === id) {
        return { ...item, userId: null };
      }
      return item;
    });
  }

  /**
   * Change boardID to null, if board with this id is deleted
   * @param id:string
   * @returns void
   */
  unsubscribeBoard(id: string): void {
    this.tasks = this.tasks.filter(item => item.boardid !== id);
  }
}

export default new TasksController();

