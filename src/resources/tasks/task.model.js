import { v4 } from 'uuid';
export class Task {
    constructor({ title, id, description, boardid, userid, columnid }) {
        this.id = id || v4();
        this.title = title;
        this.userid = userid;
        this.boardid = boardid;
        this.columnid = columnid;
        this.description = description;
    }
}
