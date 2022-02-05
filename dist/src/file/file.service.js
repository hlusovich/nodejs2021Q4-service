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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const file_1 = require("../entity/file");
const buffer_1 = require("memfs/lib/internal/buffer");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let FileService = class FileService {
    constructor(filesRepository) {
        this.filesRepository = filesRepository;
    }
    async getOne(name) {
        const file = await this.filesRepository.findOne({ originalname: name });
        const data = buffer_1.Buffer.from(file.data, "utf-8");
        return { data, originalname: file.originalname };
    }
    async create(file) {
        const createdFile = await this.filesRepository.create({ originalname: file.originalname, data: file.buffer.toString("base64") });
        await createdFile.save();
        return { originalname: createdFile.originalname, data: buffer_1.Buffer.from(createdFile.data, "utf-8") };
    }
};
FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_1.FileModel, "nestJs")),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map