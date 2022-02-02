import { IBoard } from "../controllers/boardContoller";
import { BoardDto } from "./boardDto/boardDto";
import { DeleteResult, UpdateResult } from "typeorm";
import { Response } from 'express';
export declare class BoardsController {
    getAll(): Promise<import("../entity/board").BoardModel[]>;
    getOne(id: string, res: Response): Promise<IBoard | undefined>;
    create(boardDto: BoardDto): Promise<BoardDto | undefined>;
    update(boardDto: BoardDto, id: string): Promise<UpdateResult | undefined>;
    delete(id: string, res: Response): Promise<DeleteResult | undefined>;
}
