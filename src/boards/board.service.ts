import {
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Response } from 'express';
import { DeleteResult, UpdateResult } from 'typeorm';
import { BoardsModelController, IBoard } from '../controllers/boardContoller';
import { errorHandler } from '../../utils/errorHandler';
import { BoardDto } from './boardDto/boardDto';
import { TaskModelController } from '../controllers/taskController';

@Injectable()
export class BoardService {
  async getAll() {
    const result = await BoardsModelController.getAll();
    return result;
  }

  async getOne(id: string, res: Response): Promise<IBoard | undefined> {
    try {
      const result = await BoardsModelController.getBoardById(id);
      return result;
    } catch (e) {
      res.status(errorHandler(e));
      return undefined;
    }
  }

  async create(boardDto: BoardDto)
        : Promise<BoardDto | undefined> {
    const result = await BoardsModelController.createBoard(boardDto);
    return result;
  }

  async update(boardDto: BoardDto, id: string): Promise<UpdateResult | undefined> {
    const result = await BoardsModelController.updateBoard(id, boardDto);
    return result;
  }

  async delete(id: string, res: Response): Promise<DeleteResult | undefined> {
    const deleteResult = await BoardsModelController.deleteBoard(id);
    await TaskModelController.unsubcribeBoard(id);
    if (deleteResult.affected === 0) {
      res.status(HttpStatus.NOT_FOUND);
    }
    return deleteResult;
  }
}
