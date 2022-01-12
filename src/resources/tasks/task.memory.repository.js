import { Task } from './task.model.js';
import { Error404 } from '../../../Errors/404error.js';
class TasksController {
    constructor() {
        this.tasks = [];
    }
    getAll() {
        return this.tasks;
    }
    getTask(id) {
        const task = this.tasks.find(item => item.id === id);
        if (task) {
            return task;
        }
        throw new Error404('Not found');
    }
    createTask(payload, boardid) {
        const newTask = new Task(Object.assign(Object.assign({}, payload), { boardid }));
        this.tasks.push(newTask);
        return newTask;
    }
    updateTask(id, payload) {
        this.tasks = this.tasks.map(item => {
            if (item.id === id) {
                return new Task(Object.assign(Object.assign({}, item), payload));
            }
            return item;
        });
        return this.getTask(id);
    }
    deleteTask(id) {
        this.getTask(id);
        this.tasks = this.tasks.filter(item => item.id !== id);
        return `Task with ${id} deleted`;
    }
    unsubscribeUser(id) {
        this.tasks = this.tasks.map(item => {
            if (item.userid === id) {
                return Object.assign(Object.assign({}, item), { userId: null });
            }
            return item;
        });
    }
    unsubscribeBoard(id) {
        this.tasks = this.tasks.filter(item => item.boardid !== id);
    }
}
export default new TasksController();
