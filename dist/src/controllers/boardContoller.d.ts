import { DeleteResult, UpdateResult } from 'typeorm';
import { BoardModel } from '../entity/board';
import { Board } from './board.model';
import { ColumnsModel } from '../entity/columns';
import { BoardDto } from "../boards/boardDto/boardDto";
export interface IBoard {
    columns: ColumnsModel[];
    id: string;
    title: string;
}
interface IBoardResponse {
    columns: string[];
    id: string;
    title: string;
}
export declare class BoardsModelController {
    static parseColumns(board: IBoardResponse): IBoard;
    static getAll(): Promise<BoardModel[] | undefined>;
    static getBoardById(id: string): Promise<IBoard | undefined>;
    static createBoard(data: Omit<Board, 'toResponse'>): Promise<Omit<Board, 'toResponse'> | undefined>;
    static updateBoard(id: string, data: BoardDto): Promise<UpdateResult | undefined>;
    static deleteBoard(id: string): Promise<DeleteResult>;
}
export {};
