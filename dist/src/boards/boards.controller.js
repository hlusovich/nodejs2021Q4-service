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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const boardDto_1 = require("./boardDto/boardDto");
const board_service_1 = require("./board.service");
const jwt_guard_guard_1 = require("../guards/jwt-guard.guard");
const logger_guard_guard_1 = require("../guards/logger-guard.guard");
const exceptionFilter_1 = require("../exceptionFilter/exceptionFilter");
const MyException_1 = require("../../Errors/MyException");
const validatorPipeline_1 = require("../validatorPipeline");
let BoardsController = class BoardsController {
    constructor(boardsService) {
        this.boardsService = boardsService;
    }
    async getAll() {
        const result = await this.boardsService.getAll();
        return result;
    }
    async getOne(id, res) {
        try {
            const result = await this.boardsService.getOne(id);
            return result;
        }
        catch (e) {
            throw new MyException_1.MyException(e.message, e.myCode);
        }
    }
    async create(boardDto) {
        const result = await this.boardsService.create(boardDto);
        return result;
    }
    async update(boardDto, id) {
        try {
            const result = await this.boardsService.update(boardDto, id);
            return result;
        }
        catch (e) {
            throw new MyException_1.MyException(e.message, e.myCode);
        }
    }
    async delete(id, res) {
        try {
            const deleteResult = await this.boardsService.delete(id);
        }
        catch (e) {
            throw new MyException_1.MyException(e.message, e.myCode);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard, logger_guard_guard_1.LoggerGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseFilters)(exceptionFilter_1.HttpExceptionFilter),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard, logger_guard_guard_1.LoggerGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard, logger_guard_guard_1.LoggerGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)(new validatorPipeline_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boardDto_1.BoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard, logger_guard_guard_1.LoggerGuard),
    (0, common_1.UseFilters)(exceptionFilter_1.HttpExceptionFilter),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(new validatorPipeline_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boardDto_1.BoardDto, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_guard_1.JwtAuthGuard, logger_guard_guard_1.LoggerGuard),
    (0, common_1.UseFilters)(exceptionFilter_1.HttpExceptionFilter),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "delete", null);
BoardsController = __decorate([
    (0, common_1.Controller)('boards'),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map