const Board = require('./board.model');
const Error404 = require('../../../Errors/404error');

class BoardsController {

  constructor(boards = []) {
    this.boards = boards;
  }

  getAll() {
    return this.boards.map(item => item.toResponse());
  }

  getBoard(id) {
    const board = this.boards.find(item => item.id === id);
    if (board) {
      return board.toResponse();
    }
    throw  Error404;
  }

  createBoard(payload) {
    const board = new Board(payload);
    this.boards.push(board);
    return board.toResponse();
  }

  updateBoard(id, payload) {
    let board = null;
    this.boards = this.boards.map(item => {
      if (item.id === id) {
        board = new Board({ ...item, ...payload });
        return board;
      }
      return item;
    });
    return board ? board.toResponse() : board;
  }

  deleteBoard(id) {
    this.boards = this.boards.filter(item => item.id !== id);
    return `Bard with ${id} was successfully  deleted`;
  }

  unsubscribeUser(id) {
    let columns = null;
    this.boards = this.boards.map(board => {
      columns = board.toResponse().columns.map(column => ({
        ...column, tasks: column.tasks.map(task => {
          if (task.userId === id) {
            return { ...task, userId: null };
          }
          return task;
        })
      }));
      const result = { ...board };
      result.columns = columns;
      return new Board(result);
    });
  }

}

module.exports = new BoardsController([]);
