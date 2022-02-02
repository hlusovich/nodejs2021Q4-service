"use strict";
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
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
let TaskModel = class TaskModel extends typeorm_1.BaseEntity {
    constructor(id, title, order, userId, boardId, columnId, description) {
        super();
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.description = description;
        this.order = order;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], TaskModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.UserModel, (user) => user.id, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_1.UserModel)
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
    __metadata("design:paramtypes", [String, String, Number, user_1.UserModel, String, String, String])
], TaskModel);
exports.TaskModel = TaskModel;
//# sourceMappingURL=task.js.map