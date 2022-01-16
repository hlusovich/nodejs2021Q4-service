"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var uuid_1 = require("uuid");
var Task = (function () {
    function Task(_a) {
        var title = _a.title, id = _a.id, description = _a.description, boardId = _a.boardId, userId = _a.userId, columnId = _a.columnId, order = _a.order;
        this.id = id || (0, uuid_1.v4)();
        this.title = title;
        this.order = order;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.description = description;
    }
    return Task;
}());
exports.Task = Task;
