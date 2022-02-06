/// <reference types="multer" />
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/createFileDto';
import { FileModel } from '../entity/file';
export declare class FileService {
    private filesRepository;
    constructor(filesRepository: Repository<FileModel>);
    getOne(name: string): Promise<CreateFileDto>;
    create(file: Express.Multer.File): Promise<CreateFileDto | undefined>;
}
