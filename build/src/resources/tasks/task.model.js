
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const uuid_1 = require("uuid");

const Task = (function () {
    function Task(_a) {
        const {title} = _a; const {id} = _a; const {description} = _a; const {boardid} = _a; const {userid} = _a; const {columnid} = _a;
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
// # sourceMappingURL=task.model.js.map