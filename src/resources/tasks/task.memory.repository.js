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
var task_model_js_1 = require("./task.model.js");
var _404error_js_1 = require("../../../Errors/404error.js");
var TasksController = (function () {
    function TasksController() {
        this.tasks = [];
    }
    TasksController.prototype.getAll = function () {
        return this.tasks;
    };
    TasksController.prototype.getTask = function (id) {
        var task = this.tasks.find(function (item) { return item.id === id; });
        if (task) {
            return task;
        }
        throw new _404error_js_1.Error404('Not found');
    };
    TasksController.prototype.createTask = function (payload, boardId) {
        var newTask = new task_model_js_1.Task(__assign(__assign({}, payload), { boardId: boardId }));
        this.tasks.push(newTask);
        return newTask;
    };
    TasksController.prototype.deleteTask = function (id) {
        this.getTask(id);
        this.tasks = this.tasks.filter(function (item) { return item.id !== id; });
        return "Task with ".concat(id, " deleted");
    };
    TasksController.prototype.unsubscribeUser = function (id) {
        this.tasks = this.tasks.map(function (item) {
            if (item.userId === id) {
                return __assign(__assign({}, item), { userId: null });
            }
            return item;
        });
    };
    TasksController.prototype.unsubscribeBoard = function (id) {
        this.tasks = this.tasks.filter(function (item) { return item.boardId !== id; });
    };
    return TasksController;
}());
exports.default = new TasksController();
