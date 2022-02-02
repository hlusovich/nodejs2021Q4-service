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
exports.ColumnsModel = void 0;
const typeorm_1 = require("typeorm");
const board_1 = require("./board");
let ColumnsModel = class ColumnsModel extends typeorm_1.BaseEntity {
    constructor(id, title, order) {
        super();
        this.id = id;
        this.title = title;
        this.order = order;
    }
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => board_1.BoardModel, (boards) => boards.columns),
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", String)
], ColumnsModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ColumnsModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ColumnsModel.prototype, "order", void 0);
ColumnsModel = __decorate([
    (0, typeorm_1.Entity)('columns'),
    __metadata("design:paramtypes", [String, String, Number])
], ColumnsModel);
exports.ColumnsModel = ColumnsModel;
//# sourceMappingURL=columns.js.map