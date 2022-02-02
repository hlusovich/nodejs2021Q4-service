"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModelController = void 0;
const task_1 = require("../entity/task");
const _404error_1 = require("../../Errors/404error");
const userController_1 = require("./userController");
const uuid_1 = require("uuid");
class TaskModelController {
    static async getAll() {
        const result = await task_1.TaskModel.query('SELECT * FROM tasks');
        return result;
    }
    static async getTaskById(id) {
        const tasks = await this.getAll();
        const task = tasks.find((item) => item.id === id);
        if (!task) {
            throw new _404error_1.Error404('suck tusk doesn\'t exists');
        }
        return task;
    }
    static async createTask(data) {
        let user = null;
        if (data.userId) {
            user = await userController_1.UserControllerModel.getUserById(data.userId);
        }
        const task = await task_1.TaskModel.create(Object.assign(Object.assign({}, data), { userId: user, id: (0, uuid_1.v4)() }));
        await task.save();
        const result = await this.getTaskById(task.id);
        return result;
    }
    static async updateTask(id, data) {
        if (data.userId) {
            const user = await userController_1.UserControllerModel.getUserById(data.userId);
            await task_1.TaskModel.update(id, Object.assign(Object.assign({}, data), { userId: user }));
        }
        else {
            const oldTask = await this.getTaskById(id);
            await task_1.TaskModel.update(id, Object.assign(Object.assign({}, data), { userId: oldTask.userId }));
        }
        const result = await this.getTaskById(id);
        return result;
    }
    static async deleteTask(id) {
        const result = await task_1.TaskModel.delete(id);
        return result;
    }
    static async unsubcribeBoard(boardId) {
        const result = await task_1.TaskModel.delete({ boardId });
        return result;
    }
}
exports.TaskModelController = TaskModelController;
//# sourceMappingURL=taskController.js.map