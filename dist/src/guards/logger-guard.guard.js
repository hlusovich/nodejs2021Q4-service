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
exports.LoggerGuard = void 0;
const common_1 = require("@nestjs/common");
const MyLogger_1 = require("../users/MyLogger");
let LoggerGuard = class LoggerGuard {
    constructor() {
        this.logger = MyLogger_1.logger;
    }
    canActivate(context) {
        this.logger.log(context.switchToHttp().getRequest().body);
        this.logger.log(`METHOD ${context.switchToHttp().getRequest().method}`);
        this.logger.log(`URL ${context.switchToHttp().getRequest().url}`);
        return true;
    }
};
LoggerGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggerGuard);
exports.LoggerGuard = LoggerGuard;
//# sourceMappingURL=logger-guard.guard.js.map