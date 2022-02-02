"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const task_1 = require("../entity/task");
const _404error_1 = require("../../Errors/404error");
const task_2 = require("./dto/task");
const taskController_1 = require("../controllers/taskController");
const errorHandler_1 = require("../../utils/errorHandler");
let TasksController = class TasksController {
    async getAll() {
        const result = await task_1.TaskModel.query('SELECT * FROM tasks');
        return result;
    }
    async getOne(id, res) {
        try {
            const tasks = await this.getAll();
            const task = tasks.find((item) => item.id === id);
            if (!task) {
                throw new _404error_1.Error404('no such task');
            }
            return task;
        }
        catch (e) {
            res.status((0, errorHandler_1.errorHandler)(e));
            return undefined;
        }
    }
    async create(taskDto, boardId) {
        const result = await taskController_1.TaskModelController.createTask(Object.assign(Object.assign({}, taskDto), { boardId }));
        return result;
    }
    async update(taskDto, id) {
        const result = await taskController_1.TaskModelController.updateTask(id, taskDto);
        return result;
    }
    async delete(id, res) {
        const result = await taskController_1.TaskModelController.deleteTask(id);
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __param(1, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_2.TaskDto, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_2.TaskDto, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "delete", null);
TasksController = __decorate([
    (0, common_1.Controller)('boards/:boardId/tasks')
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map