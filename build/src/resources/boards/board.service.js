"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.updateBoard = exports.createBoard = exports.getBoardById = exports.getAll = void 0;
var board_memory_repository_js_1 = require("./board.memory.repository.js");
var task_memory_repository_js_1 = require("../tasks/task.memory.repository.js");
var getAll = function () { return board_memory_repository_js_1.default.getAll(); };
exports.getAll = getAll;
var getBoardById = function (id) { return board_memory_repository_js_1.default.getBoard(id); };
exports.getBoardById = getBoardById;
var createBoard = function (data) { return board_memory_repository_js_1.default.createBoard(data); };
exports.createBoard = createBoard;
var updateBoard = function (id, data) { return board_memory_repository_js_1.default.updateBoard(id, data); };
exports.updateBoard = updateBoard;
var deleteBoard = function (id) {
    task_memory_repository_js_1.default.unsubscribeBoard(id);
    return board_memory_repository_js_1.default.deleteBoard(id);
};
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=board.service.js.map