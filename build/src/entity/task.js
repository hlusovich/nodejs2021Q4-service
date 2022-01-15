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
var BaseEntity_js_1 = require("../../node_modules/typeorm/repository/BaseEntity.js");
var Column_js_1 = require("../../node_modules/typeorm/decorator/columns/Column.js");
var PrimaryColumn_js_1 = require("../../node_modules/typeorm/decorator/columns/PrimaryColumn.js");
var Entity_js_1 = require("../../node_modules/typeorm/decorator/entity/Entity.js");
var ManyToOne_js_1 = require("../../node_modules/typeorm/decorator/relations/ManyToOne.js");
var user_js_1 = require("./user.js");
var TaskModel = (function (_super) {
    __extends(TaskModel, _super);
    function TaskModel(id, title, order, user, boardId, columnId, description) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.userid = user;
        _this.boardid = boardId;
        _this.columnid = columnId;
        _this.description = description;
        return _this;
    }
    __decorate([
        (0, PrimaryColumn_js_1.PrimaryColumn)(),
        __metadata("design:type", Number)
    ], TaskModel.prototype, "id", void 0);
    __decorate([
        (0, Column_js_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "title", void 0);
    __decorate([
        (0, ManyToOne_js_1.ManyToOne)(function (type) { return user_js_1.UserModel; }, { onDelete: "SET NULL" }),
        __metadata("design:type", String)
    ], TaskModel.prototype, "userid", void 0);
    __decorate([
        (0, Column_js_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "boardid", void 0);
    __decorate([
        (0, Column_js_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "columnid", void 0);
    __decorate([
        (0, Column_js_1.Column)(),
        __metadata("design:type", String)
    ], TaskModel.prototype, "description", void 0);
    TaskModel = __decorate([
        (0, Entity_js_1.Entity)('tasks667'),
        __metadata("design:paramtypes", [Number, String, Number, String, String, String, String])
    ], TaskModel);
    return TaskModel;
}(BaseEntity_js_1.BaseEntity));
exports.TaskModel = TaskModel;
//# sourceMappingURL=task.js.map