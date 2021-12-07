import { Board } from './board.model.js';
import { Error404 } from '../../../Errors/404error.js';

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
        throw Error404;
    }

    createBoard(payload) {
        const board = new Board(payload);
        this.boards.push(board);
        return board.toResponse();
    }

    updateBoard(id, payload) {
        this.boards = this.boards.map(item => {
            if (item.id === id) {
                return new Board({...item, ...payload});
            }
            return item;
        });
        const board = this.getBoard(id);
        return board;
    }

    deleteBoard(id) {
        this.boards = this.boards.filter(item => item.id !== id);
        return `Bard with ${id} was successfully  deleted`;
    }
}
export default new BoardsController([]);
