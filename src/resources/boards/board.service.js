const usersController = require('./board.memory.repository');
const taskController = require('../tasks/task.memory.repository');

const getAll = () => usersController.getAll();
const getBoardById = (id) => usersController.getBoard(id);
const createBoard = (data) => usersController.createBoard(data);
const updateBoard = (id, data) => usersController.updateBoard(id, data);
const deleteBoard = (id) => {
  usersController.deleteBoard(id);
  taskController.unsubscribeBoard(id);
};

module.exports = { getAll, getBoardById, createBoard, updateBoard, deleteBoard };
