
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.updateBoard = exports.createBoard = exports.getBoardById = exports.getAll = void 0;
const board_memory_repository_js_1 = require("./board.memory.repository.js");
const task_memory_repository_js_1 = require("../tasks/task.memory.repository.js");

const getAll = function () { return board_memory_repository_js_1.default.getAll(); };
exports.getAll = getAll;
const getBoardById = function (id) { return board_memory_repository_js_1.default.getBoard(id); };
exports.getBoardById = getBoardById;
const createBoard = function (data) { return board_memory_repository_js_1.default.createBoard(data); };
exports.createBoard = createBoard;
const updateBoard = function (id, data) { return board_memory_repository_js_1.default.updateBoard(id, data); };
exports.updateBoard = updateBoard;
const deleteBoard = function (id) {
    task_memory_repository_js_1.default.unsubscribeBoard(id);
    return board_memory_repository_js_1.default.deleteBoard(id);
};
exports.deleteBoard = deleteBoard;
// # sourceMappingURL=board.service.js.map