import usersController from './board.memory.repository.js';
import taskController from '../tasks/task.memory.repository.js';

const getAll = () => usersController.getAll();
const getBoardById = (id) => usersController.getBoard(id);
const createBoard = (data) => usersController.createBoard(data);
const updateBoard = (id, data) => usersController.updateBoard(id, data);
const deleteBoard = (id) => {
    taskController.unsubscribeBoard(id);
    return usersController.deleteBoard(id);
};
export { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
