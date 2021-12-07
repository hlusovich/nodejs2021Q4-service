import {Board,  IBoardToResponse} from './board.model.js';
import {Error404} from '../../../Errors/404error.js';

class BoardsController {
  boards:Board[];
  constructor(boards = []) {
    this.boards = boards;
  }
  /**
   * return  Array of Boards object without methods
   * @param there is no param
   * @returns IBoardToResponse[]
   */
  getAll():IBoardToResponse[] {
    return this.boards.map(item => item.toResponse());
  }
  /**
   * return  Board by id
   * @param id:string
   * @returns IBoardToResponse or if no board with such id throw error
   */
  getBoard(id:string):IBoardToResponse|never {
    const board = this.boards.find(item => item.id === id);
    if (board) {
      return board.toResponse();
    }
    throw  Error404;
  }
  /**
   * return  Fresh created Board
   * @param payload object with  fields title,id,columns
   * @returns IBoardToResponse
   */
  createBoard(payload:IBoardToResponse):IBoardToResponse {
    const board:Board = new Board(payload);
    this.boards.push(board);
    return board.toResponse();
  }
  /**
   * return  Fresh updated Board
   * @param id:string
   * @param payload object with unnecessary fields title,id,columns
   * @returns IBoardToResponse
   */
  updateBoard(id:string, payload:IBoardToResponse):IBoardToResponse{
    this.boards = this.boards.map(item => {
      if (item.id === id) {
        return new Board({ ...item, ...payload });
      }
      return item;
    });
    const board:IBoardToResponse = this.getBoard(id);
    return board;
  }
  /**
   * Delete post by id
   * @param id:string
   * @returns string with deleted board id
   */
  deleteBoard(id:string):string {
    this.boards = this.boards.filter(item => item.id !== id);
    return `Bard with ${id} was successfully  deleted`;
  }


}

export default new BoardsController([]);
