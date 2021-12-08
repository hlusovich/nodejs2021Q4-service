import { Board } from './board.model.js';
import { Error404 } from '../../../Errors/404error.js';

interface IColumn {
  id: string;
  title: string;
  order: number
}

export interface IBoardToResponse {
  title: string;
  id: string;
  columns: IColumn[],
}

class BoardsController {
  boards: Board[];

  constructor(boards = []) {
    this.boards = boards;
  }

  /**
   * return  Array of Boards  without methods
   * @param there is no param
   * @returns IBoardToResponse[]
   */
  getAll(): IBoardToResponse[] {
    return this.boards.map(item => item.toResponse());
  }

  /**
   * return  Board by id
   * @param id:string
   * @returns IBoardToResponse or if no board with such id throw custom error (instance of Error404)
   */
  getBoard(id: string): IBoardToResponse | never {
    const board = this.boards.find(item => item.id === id);
    if (board) {
      return board.toResponse();
    }
    throw  new Error404("no board with this id");
  }

  /**
   * return  Fresh created Board
   * @param payload object with  fields title,id,columns
   * @returns IBoardToResponse
   */
  createBoard(payload: IBoardToResponse): IBoardToResponse {
    const board: Board = new Board(payload);
    this.boards.push(board);
    return board.toResponse();
  }

  /**
   * return  Fresh updated Board
   * @param id:string
   * @param payload object with unnecessary fields title,id,columns
   * @returns IBoardToResponse or if no board with such id throw custom error (instance of Error404)
   */
  updateBoard(id: string, payload: IBoardToResponse): IBoardToResponse | never {
    this.getBoard(id);
    this.boards = this.boards.map(item => {
      if (item.id === id) {
        return new Board({ ...item, ...payload });
      }
      return item;
    });
    const board: IBoardToResponse = this.getBoard(id);
    return board;
  }

  /**
   * Delete board by id
   * @param id:string
   * @returns string with deleted board id or if no board with such id
      throw custom error (instance of Error404)
   */
  deleteBoard(id: string): string|never {
    this.getBoard(id);
    this.boards = this.boards.filter(item => item.id !== id);
    return `Bard with ${id} was successfully  deleted`;
  }


}

export default new BoardsController([]);
