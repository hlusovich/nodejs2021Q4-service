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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const boards_interfaces_1 = require("./boards.interfaces");
const board_1 = require("../entity/board");
const columnParser_1 = require("./columnParser");
const _404error_1 = require("../../Errors/404error");
const task_1 = require("../entity/task");
let BoardService = class BoardService {
    constructor(boardsRepository, tasksRepository) {
        this.boardsRepository = boardsRepository;
        this.tasksRepository = tasksRepository;
    }
    async getAll() {
        const boards = await this.boardsRepository.query('SELECT * FROM boards');
        if (boards) {
            return boards.map((board) => (0, columnParser_1.parseColumns)(board));
        }
        return undefined;
    }
    async getOne(id) {
        const board = await this.boardsRepository.findOne(id);
        if (!board) {
            throw new _404error_1.Error404('no such board');
        }
        return (0, columnParser_1.parseColumns)(Object.assign({}, board));
    }
    async create(boardDto) {
        const boardInstance = new boards_interfaces_1.Board(boardDto).toResponse();
        const board = await this.boardsRepository
            .create({ id: boardInstance.id, title: boardInstance.title, columns: boardInstance.columns });
        const result = await board.save();
        return boardInstance;
    }
    async update(boardDto, id) {
        const board = await this.getOne(id);
        if (!board) {
            throw new _404error_1.Error404('board with this id isn\'t exist');
        }
        const result = await this.boardsRepository
            .update(id, { title: boardDto.title, columns: boardDto.columns });
        return result;
    }
    async delete(id) {
        const result = await this.boardsRepository.delete(id);
        if (result.affected === 0) {
            throw new _404error_1.Error404("this board doesn't exist");
        }
        await this.tasksRepository.delete({ boardId: id });
        return result;
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(board_1.BoardModel, 'nestJs')),
    __param(1, (0, typeorm_2.InjectRepository)(task_1.TaskModel, 'nestJs')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map