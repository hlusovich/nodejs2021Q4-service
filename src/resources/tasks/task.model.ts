import { v4 } from 'uuid';
import { ITask } from './interfaces';

export class Task implements ITask {
  id: string;

  title: string;

  order: number;

  userId: string;

  boardId: string;

  columnId: string;

  description: string;

  constructor({
    title, description, boardId, userId, columnId, order,
  }: ITask) {
    this.id = v4();
    this.title = title;
    this.order = order;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.description = description;
  }
}
