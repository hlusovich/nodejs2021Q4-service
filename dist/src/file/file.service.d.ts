/// <reference types="multer" />
import { FileModel } from "../entity/file";
import { CreateFileDto } from "./dto/createFileDto";
import { Repository } from "typeorm";
export declare class FileService {
    private filesRepository;
    constructor(filesRepository: Repository<FileModel>);
    getOne(name: string): Promise<CreateFileDto>;
    create(file: Express.Multer.File): Promise<CreateFileDto | undefined>;
}
