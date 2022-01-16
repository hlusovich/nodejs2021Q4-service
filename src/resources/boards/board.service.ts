import { DeleteResult } from 'typeorm';
import { Board } from './board.model';
import { BoardsModelController } from '../../controllers/boardContoller.js';
import { TaskModelController } from '../../controllers/taskController';
import { Error404 } from '../../../Errors/404error';

/**
 * return  Array of Boards object without methods
 * @param there is no param
 * @returns Board without methods[]
 */
const getAll = async () => {
  const result = await BoardsModelController.getAll();
  return result;
};
/**
 * return  Board by id
 * @param id:string
 * @returns Board without methods or if no board with such id throw error
 */
const getBoardById = async (id: string) => {
  const result = await BoardsModelController.getBoardById(id);
  return result;
};
/**
 * return  Fresh created Board
 * @param payload object with  fields title,id,columns
 * @returns Board without methods
 */
const createBoard = async (data: Omit<Board, 'toResponse'>) => {
  const result = await BoardsModelController.createBoard({
    id: data.id,
    title: data.title,
    columns: data.columns,
  });
  return result;
};
/**
 * return  Fresh updated Board
 * @param id:string
 * @param payload object with unnecessary fields title,id,columns
 * @returns Board without methods
 */
const updateBoard = async (id: string, data: Board) => {
  const result = await BoardsModelController.updateBoard(id, data);
  return result;
};
/**
 * Delete Board by id and delete all tasks which connected with this board
 * @param id:string
 * @returns string with deleted board id
 */
const deleteBoard = async (id: string): Promise<DeleteResult> => {
  const deleteResult = await BoardsModelController.deleteBoard(id);
  if (deleteResult.affected === 0) {
    throw new Error404('this board doesn\'t exist');
  }
  await TaskModelController.unsubcribeBoard(id);
  return deleteResult;
};

export {
  getAll, getBoardById, createBoard, updateBoard, deleteBoard,
};
