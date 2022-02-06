"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var TaskModel = (function (_super) {
    __extends(TaskModel, _super);
    function TaskModel(id, title, order, userId, boardId, columnId, description) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.userId = userId;
        _this.boardId = boardId;
        _this.columnId = columnId;
        _this.description = description;
        _this.order = order;
        return _this;
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.UserModel; }, function (user) { return user.id; }, { onDelete: 'SET NULL', nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'userId' }),
        __metadata("design:type", Object)
    ], TaskModel.prototype, "userId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "boardId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], TaskModel.prototype, "columnId", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], TaskModel.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "description", void 0);
    TaskModel = __decorate([
        (0, typeorm_1.Entity)('tasks'),
        __metadata("design:paramtypes", [String, String, Number, Object, String, String, String])
    ], TaskModel);
    return TaskModel;
}(typeorm_1.BaseEntity));
exports.TaskModel = TaskModel;
