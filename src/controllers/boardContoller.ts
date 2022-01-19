import { DeleteResult, UpdateResult } from 'typeorm';
import { BoardModel } from '../entity/board.js';
import { Board } from '../resources/boards/board.model';
import { ColumnsModel } from '../entity/columns';
import { ColumnModelController } from './columnController';
import { Error404 } from '../../Errors/404error';

interface IBoard {
  columns: ColumnsModel[],
  id: string,
  title: string

}

export class BoardsModelController {
  /**
   * @param there is no param
   * @returns Promise<BoardModel[]> with ColumnModels instead of id
   */
  static async getAll():Promise<BoardModel[]> {
    const boards = await BoardModel.query('SELECT * FROM boards');
    /* eslint-disable no-await-in-loop */
    for (let i = 0; i < boards.length; i += 1) {
      const item = boards[i];
      const columns = await Promise.all(item.columns
        .map(async (colId: string) => {
          const result = await ColumnModelController.getColumn(colId);
          return result;
        }));
      item.columns = columns;
    }
    /* eslint-enable no-await-in-loop */
    return boards;
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
    if (board) {
      const columns = await Promise.all(board.columns.map(async (colId:string) => {
        const result = await ColumnModelController.getColumn(colId);
        return result;
      }));
      const boardToResponse = { ...board, columns };
      return boardToResponse as IBoard;
    }
    return undefined;
  }

  /**
   * return  Fresh created BoardModel
   * @param payload object with  fields title,id,columns
   * @returns Promise<IBoard>
   */
  static async createBoard(data: Omit<Board, 'toResponse'>):Promise<IBoard|undefined> {
    const boardInstance = new Board(data).toResponse();
    const columns = boardInstance.columns.map((item) => item.id);
    const board = await BoardModel
      .create({ id: boardInstance.id, title: boardInstance.title, columns });
    boardInstance.columns.map(async (item) => {
      const col = await ColumnModelController.createColumn(item);
    });
    await board.save();
    const result = await this.getBoardById(boardInstance.id);
    return result;
  }

  /**
   * return  Fresh updated Board
   * @param id:string
   * @param payload object with  fields title,id,columns
   * @returns Promise<IBoard> or
   * if no board with such id throw custom error (instance of Error404)
   */
  static async updateBoard(id: string, data: Board): Promise<IBoard|undefined> {
    const board = await this.getBoardById(id);
    if(!board){
      throw new Error404("board with this id isn't exist")
    }
    const columns = data.columns.map((item) => item.id);
    data.columns.map(async (item) => {
      const column = await ColumnsModel.create(item);
      await column.save();
    });
    await BoardModel.update(id, { title: data.title, columns });
    const result = await this.getBoardById(id);
    return result;
  }

  /**
   * Delete board by id
   * @param id:string
   * @returns string with delete result (instance of DeleteResult)  or if this board doesn't exist throw Error404
   */
  static async deleteBoard(id: string): Promise<DeleteResult> {
    const result = await BoardModel.delete(id);
    if (result.affected === 0) {
      throw new Error404('no such board');
    }
    return result;
  }
}
