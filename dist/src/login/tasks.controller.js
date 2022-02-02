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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const task_1 = require("./dto/task");
const task_service_1 = require("./task.service");
const jwt_guard_guard_1 = require("../guard/jwt-guard.guard");
let LoginController = class LoginController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getAll() {
        const result = await this.taskService.getAll();
        return result;
    }
    async getOne(id, res) {
        const result = await this.taskService.getOne(id, res);
        return result;
    }
    async create(taskDto, boardId) {
        const result = await this.taskService.create(taskDto, boardId);
        return result;
    }
    async update(taskDto, id) {
        const result = await this.taskService.update(taskDto, id);
        return result;
    }
    async delete(id, res) {
        const result = await this.taskService.delete(id, res);
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __param(1, (0, common_1.Param)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof task_1.TaskDto !== "undefined" && task_1.TaskDto) === "function" ? _a : Object, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof task_1.TaskDto !== "undefined" && task_1.TaskDto) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "delete", null);
LoginController = __decorate([
    (0, common_1.Controller)('boards/:boardId/tasks'),
    __metadata("design:paramtypes", [typeof (_c = typeof task_service_1.TaskService !== "undefined" && task_service_1.TaskService) === "function" ? _c : Object])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=tasks.controller.js.map