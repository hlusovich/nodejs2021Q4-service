import usersController from './board.memory.repository.js';
import taskController from '../tasks/task.memory.repository.js';

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


/**
 * return  Array of Boards object without methods
 * @param there is no param
 * @returns IBoardToResponse[]
 */
const getAll = (): IBoardToResponse[] => usersController.getAll();
/**
 * return  Board by id
 * @param id:string
 * @returns IBoardToResponse or if no board with such id throw error
 */
const getBoardById = (id: string): IBoardToResponse => usersController.getBoard(id);
/**
 * return  Fresh created Board
 * @param payload object with  fields title,id,columns
 * @returns IBoardToResponse
 */
const createBoard = (data: IBoardToResponse): IBoardToResponse => usersController.createBoard(data);
/**
 * return  Fresh updated Board
 * @param id:string
 * @param payload object with unnecessary fields title,id,columns
 * @returns IBoardToResponse
 */
const updateBoard = (id: string, data: IBoardToResponse): IBoardToResponse => usersController.updateBoard(id, data);
/**
 * Delete Board by id and delete all tasks which connected with this board
 * @param id:string
 * @returns string with deleted board id
 */
const deleteBoard = (id: string): string => {
  taskController.unsubscribeBoard(id);
 return  usersController.deleteBoard(id);
};

export { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
