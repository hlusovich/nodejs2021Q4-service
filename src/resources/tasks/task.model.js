import { v4 } from 'uuid';
export class Task {
    constructor({ title, id, order, description, boardId, userId, columnId }) {
        this.id = id || v4();
        this.title = title;
        this.order = order;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.description = description;
    }
}
