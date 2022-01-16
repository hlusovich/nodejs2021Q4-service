"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var board_model_js_1 = require("./board.model.js");
var _404error_js_1 = require("../../../Errors/404error.js");
var BoardsController = (function () {
    function BoardsController(boards) {
        if (boards === void 0) { boards = []; }
        this.boards = boards;
    }
    BoardsController.prototype.getAll = function () {
        return this.boards.map(function (item) { return item.toResponse(); });
    };
    BoardsController.prototype.getBoard = function (id) {
        var board = this.boards.find(function (item) { return item.id === id; });
        if (board) {
            return board.toResponse();
        }
        throw new _404error_js_1.Error404('no board with this id');
    };
    BoardsController.prototype.createBoard = function (payload) {
        var board = new board_model_js_1.Board(payload);
        this.boards.push(board);
        return board.toResponse();
    };
    BoardsController.prototype.updateBoard = function (id, payload) {
        this.getBoard(id);
        this.boards = this.boards.map(function (item) {
            if (item.id === id) {
                return new board_model_js_1.Board(__assign(__assign({}, item), payload));
            }
            return item;
        });
        var board = this.getBoard(id);
        return board;
    };
    BoardsController.prototype.deleteBoard = function (id) {
        this.getBoard(id);
        this.boards = this.boards.filter(function (item) { return item.id !== id; });
        return "Bard with ".concat(id, " was successfully  deleted");
    };
    return BoardsController;
}());
exports.default = new BoardsController([]);
