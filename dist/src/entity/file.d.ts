import { BaseEntity } from 'typeorm';
export declare class FileModel extends BaseEntity {
    id: number;
    originalname: string;
    data: string;
}
