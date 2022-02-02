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
const boardContoller_1 = require("../controllers/boardContoller");
const boardDto_1 = require("./boardDto/boardDto");
const taskController_1 = require("../controllers/taskController");
const errorHandler_1 = require("../../utils/errorHandler");
let BoardsController = class BoardsController {
    async getAll() {
        const result = await boardContoller_1.BoardsModelController.getAll();
        return result;
    }
    async getOne(id, res) {
        try {
            const result = await boardContoller_1.BoardsModelController.getBoardById(id);
            return result;
        }
        catch (e) {
            res.status((0, errorHandler_1.errorHandler)(e));
        }
    }
    async create(boardDto) {
        const result = await boardContoller_1.BoardsModelController.createBoard(boardDto);
        return result;
    }
    async update(boardDto, id) {
        const result = await boardContoller_1.BoardsModelController.updateBoard(id, boardDto);
        return result;
    }
    async delete(id, res) {
        const deleteResult = await boardContoller_1.BoardsModelController.deleteBoard(id);
        await taskController_1.TaskModelController.unsubcribeBoard(id);
        if (deleteResult.affected === 0) {
            res.status(common_1.HttpStatus.NOT_FOUND);
        }
        return deleteResult;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boardDto_1.BoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boardDto_1.BoardDto, String]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "delete", null);
BoardsController = __decorate([
    (0, common_1.Controller)('boards')
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map