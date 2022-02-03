"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_1 = require("../entity/task");
const _404error_1 = require("../../Errors/404error");
const taskController_1 = require("../controllers/taskController");
let TaskService = class TaskService {
    async getAll() {
        const result = await task_1.TaskModel.query('SELECT * FROM tasks');
        return result;
    }
    async getOne(id) {
        const tasks = await this.getAll();
        const task = tasks.find((item) => item.id === id);
        if (!task) {
            throw new _404error_1.Error404('no such task');
        }
        return task;
    }
    async create(taskDto, boardId) {
        const result = await taskController_1.TaskModelController.createTask(Object.assign(Object.assign({}, taskDto), { boardId }));
        return result;
    }
    async update(taskDto, id) {
        const result = await taskController_1.TaskModelController.updateTask(id, taskDto);
        return result;
    }
    async delete(id) {
        const result = await taskController_1.TaskModelController.deleteTask(id);
        if (result.affected === 0) {
            throw new _404error_1.Error404("this task doesn't exist");
        }
        return result;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map