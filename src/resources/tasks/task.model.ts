import { v4 } from 'uuid';

interface ITask {
  id: string;
  title: string;
  order: number;
  userId: string | null;
  boardId: string | null;
  columnId: string;
  description: string;
}

export class Task {
  id: string;

  title: string;

  order: number;

  userId: string | null;

  boardId: string | null;

  columnId: string;

  description: string;

  constructor({ title, id, order, description, boardId, userId, columnId }: ITask) {
    this.id = id || v4();
    this.title = title;
    this.order = order;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
    this.description = description;
  }

}


