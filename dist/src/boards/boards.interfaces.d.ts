import { ColumnsModel } from '../entity/columns';
export interface IBoardResponse {
    columns: string[];
    id: string;
    title: string;
}
export interface IBoard {
    columns: ColumnsModel[];
    id: string;
    title: string;
}
