/// <reference types="multer" />
import { FileService } from "./file.service";
import { CreateFileDto } from "./dto/createFileDto";
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    getOne(name: string): Promise<CreateFileDto>;
    create(file: Express.Multer.File): Promise<CreateFileDto>;
}
