export interface IColumn {
    order: number;
    title: string;
    id: string;
}
export declare class Board {
    id: string;
    title: string;
    columns: Array<IColumn>;
    constructor({ title, columns, id }: Omit<Board, 'toResponse'>);
    toResponse(): Omit<Board, 'toResponse'>;
}
