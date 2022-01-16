
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_model_js_1 = require("./task.model.js");
const _404error_js_1 = require("../../../Errors/404error.js");

const TasksController = (function () {
    function TasksController() {
        this.tasks = [];
    }
    TasksController.prototype.getAll = function () {
        return this.tasks;
    };
    TasksController.prototype.getTask = function (id) {
        const task = this.tasks.find((item) => item.id === id);
        if (task) {
            return task;
        }
        throw new _404error_js_1.Error404('Not found');
    };
    TasksController.prototype.createTask = function (payload, boardid) {
        const newTask = new task_model_js_1.Task({...payload, boardid});
        this.tasks.push(newTask);
        return newTask;
    };
    TasksController.prototype.updateTask = function (id, payload) {
        this.tasks = this.tasks.map((item) => {
            if (item.id === id) {
                return new task_model_js_1.Task({...item, ...payload});
            }
            return item;
        });
        return this.getTask(id);
    };
    TasksController.prototype.deleteTask = function (id) {
        this.getTask(id);
        this.tasks = this.tasks.filter((item) => item.id !== id);
        return "Task with ".concat(id, " deleted");
    };
    TasksController.prototype.unsubscribeUser = function (id) {
        this.tasks = this.tasks.map((item) => {
            if (item.userid === id) {
                return {...item, userId: null};
            }
            return item;
        });
    };
    TasksController.prototype.unsubscribeBoard = function (id) {
        this.tasks = this.tasks.filter((item) => item.boardid !== id);
    };
    return TasksController;
}());
exports.default = new TasksController();
// # sourceMappingURL=task.memory.repository.js.map