"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsModelController = void 0;
const board_1 = require("../entity/board");
const board_model_1 = require("./board.model");
const _404error_1 = require("../../Errors/404error");
class BoardsModelController {
    static parseColumns(board) {
        const columns = board.columns.map((item) => JSON.parse(item));
        const parsedBoard = Object.assign(Object.assign({}, board), { columns });
        return parsedBoard;
    }
    static async getAll() {
        const boards = await board_1.BoardModel.query('SELECT * FROM boards');
        if (boards) {
            return boards.map((board) => this.parseColumns(board));
        }
        return undefined;
    }
    static async getBoardById(id) {
        const board = await board_1.BoardModel.findOne(id);
        if (!board) {
            throw new _404error_1.Error404('no such board');
        }
        return this.parseColumns(Object.assign({}, board));
    }
    static async createBoard(data) {
        const boardInstance = new board_model_1.Board(data).toResponse();
        const board = await board_1.BoardModel
            .create({ id: boardInstance.id, title: boardInstance.title, columns: boardInstance.columns });
        const result = await board.save();
        return boardInstance;
    }
    static async updateBoard(id, data) {
        const board = await this.getBoardById(id);
        if (!board) {
            throw new _404error_1.Error404('board with this id isn\'t exist');
        }
        const result = await board_1.BoardModel.update(id, { title: data.title, columns: data.columns });
        return result;
    }
    static async deleteBoard(id) {
        const result = await board_1.BoardModel.delete(id);
        return result;
    }
}
exports.BoardsModelController = BoardsModelController;
//# sourceMappingURL=boardContoller.js.map