import { DeleteResult, UpdateResult } from 'typeorm';
import { Response } from 'express';
import { BoardDto } from './boardDto/boardDto';
import { BoardService } from './board.service';
import { IBoard } from '../boards/boards.interfaces';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardService);
    getAll(): Promise<import("../boards/boards.interfaces").IBoardResponse[]>;
    getOne(id: string, res: Response): Promise<IBoard | undefined>;
    create(boardDto: BoardDto): Promise<BoardDto | undefined>;
    update(boardDto: BoardDto, id: string): Promise<UpdateResult | undefined>;
    delete(id: string, res: Response): Promise<DeleteResult | undefined>;
}
