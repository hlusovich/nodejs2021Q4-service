import {Board} from "./board.model";
import { BoardsModelController } from '../../controllers/boardContoller.js';
import { TaskModelController } from '../../controllers/taskController';


/**
 * return  Array of Boards object without methods
 * @param there is no param
 * @returns Board without methods[]
 */
 const getAll = async () => await BoardsModelController.getAll();
/**
 * return  Board by id
 * @param id:string
 * @returns Board without methods or if no board with such id throw error
 */
 const getBoardById = async (id: string) => {await BoardsModelController.getBoardById(id)};
/**
 * return  Fresh created Board
 * @param payload object with  fields title,id,columns
 * @returns Board without methods
 */
 const createBoard = async (data: Omit<Board, 'toResponse'>)=> {
  return await BoardsModelController.createBoard({ id:data.id, title:data.title, columns:data.columns})};
/**
 * return  Fresh updated Board
 * @param id:string
 * @param payload object with unnecessary fields title,id,columns
 * @returns Board without methods
 */
const updateBoard = async (id: string, data: Board) => await BoardsModelController.updateBoard(id, data);
/**
 * Delete Board by id and delete all tasks which connected with this board
 * @param id:string
 * @returns string with deleted board id
 */
const deleteBoard = async (id: string) => {
 await TaskModelController.unsubcribeBoard(id);
 return  await BoardsModelController.deleteBoard(id);
};

export { getAll, getBoardById, createBoard, updateBoard, deleteBoard};
