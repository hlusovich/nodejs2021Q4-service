import { v4 } from 'uuid';

interface ITask {
  id: string;
  title: string;
  order: number;
  userId: string|null;
  boardId: string;
  columnId: string;
  description: string;
}

export class Task implements ITask {
  id: string;

  title: string;

  order: number;

  userId: string| null;

  boardId: string;

  columnId: string;

  description: string;

  constructor({
    title, id, description, boardId, userId, columnId, order,
  }: ITask) {
    this.id = id || v4();
    this.title = title;
    this.order = order;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.description = description;
  }
}
