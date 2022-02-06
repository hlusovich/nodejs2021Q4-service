import {
  Injectable,
} from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IBoard, IBoardResponse, Board } from './boards.interfaces';
import { BoardDto } from './boardDto/boardDto';
import { BoardModel } from '../entity/board';

import { parseColumns } from './columnParser';
import { Error404 } from '../../Errors/404error';

import { TaskModel } from '../entity/task';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(BoardModel, 'nestJs')
                private boardsRepository: Repository<BoardModel>, @InjectRepository(TaskModel, 'nestJs')
                private tasksRepository: Repository<TaskModel>) {
  }

  /**
     * @param no params
     * @returns Promise<IBoardResponse[]> with ColumnModels instead of id
     */
  async getAll(): Promise<IBoardResponse[] | undefined> {
    const boards = await this.boardsRepository.query('SELECT * FROM boards');
    if (boards) {
      return boards.map((board: IBoardResponse) => parseColumns(board));
    }
    return undefined;
  }

  /**
     * return  BoardModel by id
     * @param id:string
     * @returns Promise <IBoard> BoardModel with ColumnModels instead of id
     * no board with such id throw custom error (instance of Error404)
     */
  async getOne(id: string): Promise<IBoard | undefined> {
    const board = await this.boardsRepository.findOne(id);
    if (!board) {
      throw new Error404('no such board');
    }
    return parseColumns({ ...board as unknown as IBoardResponse });
  }

  /**
     * return  Fresh created BoardModel
     * @param payload object with  fields title,id,columns
     * @returns Promise<IBoard>
     */
  async create(boardDto: BoardDto)
        : Promise<BoardDto | undefined> {
    const boardInstance = new Board(boardDto).toResponse();
    const board = await this.boardsRepository
      .create({ id: boardInstance.id, title: boardInstance.title, columns: boardInstance.columns });
    const result = await board.save();
    return boardInstance;
  }

  /**
     * return  Fresh updated Board
     * @param id:string
     * @param payload object with  fields title,id,columns
     * @returns Promise<IBoard> or
     * if no board with such id throw custom error (instance of Error404)
     */
  async update(boardDto: BoardDto, id: string): Promise<UpdateResult | undefined> {
    const board = await this.getOne(id);
    if (!board) {
      throw new Error404('board with this id isn\'t exist');
    }
    const result = await this.boardsRepository
      .update(id, { title: boardDto.title, columns: boardDto.columns });
    return result;
  }

  /**
     * Delete board by id
     * @param id:string
     * @returns string with delete result (instance of DeleteResult)
     * or if this board doesn't exist throw Error404
     */
  async delete(id: string): Promise<DeleteResult | undefined> {
    const result = await this.boardsRepository.delete(id);
    if (result.affected === 0) {
      throw new Error404("this board doesn't exist");
    }
    await this.tasksRepository.delete({ boardId: id });
    return result;
  }
}
