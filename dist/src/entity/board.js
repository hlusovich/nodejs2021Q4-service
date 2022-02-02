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
exports.BoardModel = void 0;
const typeorm_1 = require("typeorm");
let BoardModel = class BoardModel extends typeorm_1.BaseEntity {
    constructor(id, title, columns) {
        super();
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true, type: 'text' }),
    __metadata("design:type", String)
], BoardModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BoardModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', array: true, default: [] }),
    __metadata("design:type", Array)
], BoardModel.prototype, "columns", void 0);
BoardModel = __decorate([
    (0, typeorm_1.Entity)('boards'),
    __metadata("design:paramtypes", [String, String, Array])
], BoardModel);
exports.BoardModel = BoardModel;
//# sourceMappingURL=board.js.map