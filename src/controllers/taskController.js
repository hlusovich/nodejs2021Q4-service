import { TaskModel } from '../entity/task.js';
export class TaskModelController {
    static async getAll() {
        return await TaskModel.query("SELECT * FROM tasks6");
    }
    ;
    static async getTaskById(id) {
        const task = await TaskModel.findOne(id);
        return task;
    }
    static async createTask(data) {
        const task = await TaskModel.create(Object.assign({}, data));
        await task.save();
        return task;
    }
    ;
    static async updateTask(id, data) {
        return await TaskModel.update(id, Object.assign({}, data));
    }
    ;
    static async deleteTask(id) {
        return await TaskModel.delete(id);
    }
    ;
}
