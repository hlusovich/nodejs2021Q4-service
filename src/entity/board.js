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
exports.BoardModel = void 0;
var BaseEntity_js_1 = require("../../node_modules/typeorm/repository/BaseEntity.js");
var PrimaryColumn_js_1 = require("../../node_modules/typeorm/decorator/columns/PrimaryColumn.js");
var Entity_js_1 = require("../../node_modules/typeorm/decorator/entity/Entity.js");
var typeorm_1 = require("typeorm");
var BoardModel = (function (_super) {
    __extends(BoardModel, _super);
    function BoardModel(id, title, columns) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.columns = columns;
        return _this;
    }
    __decorate([
        (0, PrimaryColumn_js_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], BoardModel.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], BoardModel.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", array: true, default: [] }),
        __metadata("design:type", Array)
    ], BoardModel.prototype, "columns", void 0);
    BoardModel = __decorate([
        (0, Entity_js_1.Entity)('boards'),
        __metadata("design:paramtypes", [String, String, Array])
    ], BoardModel);
    return BoardModel;
}(BaseEntity_js_1.BaseEntity));
exports.BoardModel = BoardModel;
