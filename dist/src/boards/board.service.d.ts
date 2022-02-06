import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IBoard, IBoardResponse } from './boards.interfaces';
import { BoardDto } from './boardDto/boardDto';
import { BoardModel } from '../entity/board';
import { TaskModel } from '../entity/task';
export declare class BoardService {
    private boardsRepository;
    private tasksRepository;
    constructor(boardsRepository: Repository<BoardModel>, tasksRepository: Repository<TaskModel>);
    getAll(): Promise<IBoardResponse[] | undefined>;
    getOne(id: string): Promise<IBoard | undefined>;
    create(boardDto: BoardDto): Promise<BoardDto | undefined>;
    update(boardDto: BoardDto, id: string): Promise<UpdateResult | undefined>;
    delete(id: string): Promise<DeleteResult | undefined>;
}
