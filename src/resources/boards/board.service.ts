import usersController from './board.memory.repository.js';
import taskController from '../tasks/task.memory.repository.js';
import {Board} from "./board.model";


/**
 * return  Array of Boards object without methods
 * @param there is no param
 * @returns Board without methods[]
 */
const getAll = (): Omit<Board, "toResponse">[] => usersController.getAll();
/**
 * return  Board by id
 * @param id:string
 * @returns Board without methods or if no board with such id throw error
 */
const getBoardById = (id: string): Omit<Board, "toResponse"> => usersController.getBoard(id);
/**
 * return  Fresh created Board
 * @param payload object with  fields title,id,columns
 * @returns Board without methods
 */
const createBoard = (data: Omit<Board, "toResponse">): Omit<Board, "toResponse"> => usersController.createBoard(data);
/**
 * return  Fresh updated Board
 * @param id:string
 * @param payload object with unnecessary fields title,id,columns
 * @returns Board without methods
 */
const updateBoard = (id: string, data: Omit<Board, "toResponse">): Omit<Board, "toResponse"> => usersController.updateBoard(id, data);
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
