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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_1 = require("../entity/task");
const _404error_1 = require("../../Errors/404error");
const typeorm_2 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const user_1 = require("../entity/user");
let TaskService = class TaskService {
    constructor(tasksRepository, usersRepository) {
        this.tasksRepository = tasksRepository;
        this.usersRepository = usersRepository;
    }
    async getAll() {
        const result = await this.tasksRepository.query('SELECT * FROM tasks');
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
        let user = null;
        if (taskDto.userId) {
            user = await this.usersRepository.findOne(taskDto.userId);
        }
        const task = await this.tasksRepository.create(Object.assign(Object.assign({}, taskDto), { userId: user, id: (0, uuid_1.v4)(), boardId }));
        await task.save();
        return task;
    }
    async update(taskDto, id) {
        if (taskDto.userId) {
            const user = await this.usersRepository.findOne(taskDto.userId);
            await this.tasksRepository.update(id, Object.assign(Object.assign({}, taskDto), { userId: user }));
        }
        else {
            const oldTask = await this.getOne(id);
            await this.tasksRepository.update(id, Object.assign(Object.assign({}, taskDto), { userId: oldTask.userId }));
        }
        const result = await this.getOne(id);
        return result;
    }
    async delete(id) {
        const result = await this.tasksRepository.delete(id);
        if (result.affected === 0) {
            throw new _404error_1.Error404("this task doesn't exist");
        }
        return result;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(task_1.TaskModel, "nestJs")),
    __param(1, (0, typeorm_2.InjectRepository)(user_1.UserModel, "nestJs")),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map