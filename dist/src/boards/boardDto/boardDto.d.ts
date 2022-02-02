import { IColumn } from '../../controllers/board.model';
export declare class BoardDto {
    id: string;
    title: string;
    columns: Array<IColumn>;
}
