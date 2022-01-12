import { v4 } from 'uuid';

interface ITask {
  id: string;
  title: string;
  // order: number;
  userid: string;
  boardid: string;
  columnid: string;
  description: string;
}

export class Task implements ITask{
  id: string;

  title: string;

  // order: number;

  userid: string ;

  boardid: string ;

  columnid: string;

  description: string;

  constructor({ title, id,  description, boardid, userid, columnid }: ITask) {
    this.id = id || v4();
    this.title = title;
    // this.order = order;
    this.userid = userid;
    this.boardid = boardid;
    this.columnid = columnid;
    this.description = description;
  }

}


