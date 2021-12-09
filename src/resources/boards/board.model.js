import { v4 } from 'uuid';

export class Board {
    constructor({ title, columns, id }) {
        this.id = id || v4();
        this.title = title;
        this.columns = columns;
    }

    toResponse() {
        return {
            id: this.id,
            title: this.title,
            columns: [...this.columns]
        };
    }
}
