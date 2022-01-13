var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, } from '../../node_modules/typeorm/repository/BaseEntity.js';
import { Column } from '../../node_modules/typeorm/decorator/columns/Column.js';
import { PrimaryColumn } from '../../node_modules/typeorm/decorator/columns/PrimaryColumn.js';
import { Entity } from '../../node_modules/typeorm/decorator/entity/Entity.js';
import { ManyToOne } from '../../node_modules/typeorm/decorator/relations/ManyToOne.js';
import { UserModel } from "./user.js";
let TaskModel = class TaskModel extends BaseEntity {
    constructor(id, title, order, user, boardId, columnId, description) {
        super();
        this.id = id;
        this.title = title;
        this.userid = user;
        this.boardid = boardId;
        this.columnid = columnId;
        this.description = description;
    }
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", Number)
], TaskModel.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TaskModel.prototype, "title", void 0);
__decorate([
    ManyToOne(type => UserModel, { onDelete: "SET NULL" }),
    __metadata("design:type", String)
], TaskModel.prototype, "userid", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TaskModel.prototype, "boardid", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TaskModel.prototype, "columnid", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], TaskModel.prototype, "description", void 0);
TaskModel = __decorate([
    Entity('tasks667'),
    __metadata("design:paramtypes", [Number, String, Number, String, String, String, String])
], TaskModel);
export { TaskModel };
