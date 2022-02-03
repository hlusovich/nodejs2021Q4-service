/// <reference types="multer" />
import { CreateFileDto } from "./dto/createFileDto";
export declare class FileService {
    getOne(name: string): Promise<CreateFileDto>;
    create(file: Express.Multer.File): Promise<CreateFileDto | undefined>;
}
