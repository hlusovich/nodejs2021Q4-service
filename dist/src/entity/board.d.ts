import { BaseEntity } from 'typeorm';
import { ColumnsModel } from './columns';
export declare class BoardModel extends BaseEntity {
    constructor(id: string, title: string, columns: ColumnsModel[]);
    id: string;
    title: string;
    columns: ColumnsModel[];
}
