import { BoardModel } from '../entity/board.js';
import { TaskModel } from '../entity/task';
import { UserModel } from '../entity/user';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Column } from '../resources/boards/Column.js';
import { Board } from '../resources/boards/board.model';
import { ColumnsModel } from '../entity/columns';
import { ColumnModelController } from './columnController';

interface IBoard {
  columns: Column[],
  id: string,
  title: string

}

export class BoardsModelController {
  /**
   * return  Array of Boards  without methods
   * @param there is no param
   * @returns Array of Board without methods
   */
  static async getAll() {
    const boards = await BoardModel.query('SELECT * FROM boards');
    for (const item of boards) {
      for (let columnsIndex = 0; columnsIndex<item.columns.length;columnsIndex++) {
        const column = await ColumnModelController.getColumn(item.columns[columnsIndex] + '');
        item.columns[columnsIndex] = column;
      }

    }
    return boards;
  }

  /**
   * return  Board by id
   * @param id:string
   * @returns Board without methods or if no board with such id throw custom error (instance of Error404)
   */
  static async getBoardById(id: string) {
    const user = await BoardModel.findOne(id);
    return user;
  }

  /**
   * return  Fresh created Board
   * @param payload object with  fields title,id,columns
   * @returns Board without methods
   */
  static async createBoard(data: Omit<Board, 'toResponse'>): Promise<BoardModel> {
    const boardInstance = new Board(data);
    const columns = data.columns.map(item => +item.id);
    const board = await BoardModel.create({ id: boardInstance.id, title: boardInstance.title, columns });
    data.columns.map(async (item) => {
      await ColumnModelController.createColumn(item);
    });
    await board.save();
    return board;

  };

  /**
   * return  Fresh updated Board
   * @param id:string
   * @param payload object with unnecessary fields title,id,columns
   * @returns Board without methods or if no board with such id throw custom error (instance of Error404)
   */
  static async updateBoard(id: string, data: Board): Promise<UpdateResult> {
    const columns = data.columns.map(item => +item.id);
    data.columns.map(async (item) => {
      const column = await ColumnsModel.create(item);
      await column.save();
    });
    return await BoardModel.update(id, { id, title: data.title, columns });
  };

  /**
   * Delete task by id
   * @param id:string
   * @returns string with deleted board id
   */
  static async deleteBoard(id: string): Promise<DeleteResult> {
    return await BoardModel.delete(id);
  };


}

