"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModelController = void 0;
const task_1 = require("../entity/task");
class TaskModelController {
    static async unsubcribeBoard(boardId) {
        const result = await task_1.TaskModel.delete({ boardId });
        return result;
    }
}
exports.TaskModelController = TaskModelController;
//# sourceMappingURL=taskController.js.map