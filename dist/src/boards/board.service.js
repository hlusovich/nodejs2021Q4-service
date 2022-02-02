"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const boardContoller_1 = require("../controllers/boardContoller");
const errorHandler_1 = require("../../utils/errorHandler");
const taskController_1 = require("../controllers/taskController");
let BoardService = class BoardService {
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
            return undefined;
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
BoardService = __decorate([
    (0, common_1.Injectable)()
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map