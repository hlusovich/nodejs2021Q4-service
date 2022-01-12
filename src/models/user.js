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
let UserModel = class UserModel extends BaseEntity {
    constructor(id, name, login, password) {
        super();
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
};
__decorate([
    PrimaryColumn(),
    __metadata("design:type", String)
], UserModel.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserModel.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserModel.prototype, "login", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
UserModel = __decorate([
    Entity('users3'),
    __metadata("design:paramtypes", [String, String, String, String])
], UserModel);
export { UserModel };
