"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var uuid_1 = require("uuid");
var Task = (function () {
    function Task(_a) {
        var title = _a.title, id = _a.id, description = _a.description, boardid = _a.boardid, userid = _a.userid, columnid = _a.columnid;
        this.id = id || (0, uuid_1.v4)();
        this.title = title;
        this.userid = userid;
        this.boardid = boardid;
        this.columnid = columnid;
        this.description = description;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map