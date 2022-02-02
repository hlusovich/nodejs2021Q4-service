import { DeleteResult, UpdateResult } from 'typeorm';
import { BoardModel } from '../entity/board';
import { Board } from './board.model';
import { ColumnsModel } from '../entity/columns';
import { Error404 } from '../../Errors/404error';
import {BoardDto} from "../boards/boardDto/boardDto";

export interface IBoard {
  columns: ColumnsModel[],
  id: string,
  title: string

}

interface IBoardResponse {
  columns: string[],
  id: string,
  title: string

}
export class BoardsModelController {
  static parseColumns(board:IBoardResponse): IBoard {
    const columns = board.columns.map((item:string) => JSON.parse(item));
    const parsedBoard:IBoard = { ...board, columns };
    return parsedBoard;
  }

  /**
   * @param there is no param
   * @returns Promise<BoardModel[]> with ColumnModels instead of id
   */
  static async getAll(): Promise<BoardModel[]|undefined> {
    const boards = await BoardModel.query('SELECT * FROM boards');
    if (boards) {
      return boards.map((board: IBoardResponse) => this.parseColumns(board));
    }
    return undefined;
  }

  /**
   * return  BoardModel by id
   * @param id:string
   * @returns Promise <IBoard> BoardModel with ColumnModels instead of id
   * no board with such id throw custom error (instance of Error404)
   */
  static async getBoardById(id: string): Promise<IBoard | undefined> {
    const board = await BoardModel.findOne(id);
    if (!board) {
      throw new Error404('no such board');
    }
    return this.parseColumns({ ...board as unknown as IBoardResponse });
  }

  /**
   * return  Fresh created BoardModel
   * @param payload object with  fields title,id,columns
   * @returns Promise<IBoard>
   */
  static async createBoard(data: Omit<Board, 'toResponse'>): Promise<Omit<Board, 'toResponse'> | undefined> {
    const boardInstance = new Board(data).toResponse();
    const board = await BoardModel
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
  static async updateBoard(id: string, data: BoardDto): Promise<UpdateResult | undefined> {
    const board = await this.getBoardById(id);
    if (!board) {
      throw new Error404('board with this id isn\'t exist');
    }
    const result = await BoardModel.update(id, { title: data.title, columns: data.columns });
    return result;
  }

  /**
   * Delete board by id
   * @param id:string
   * @returns string with delete result (instance of DeleteResult)
   * or if this board doesn't exist throw Error404
   */
  static async deleteBoard(id: string): Promise<DeleteResult> {
    const result = await BoardModel.delete(id);
    return result;
  }
}
