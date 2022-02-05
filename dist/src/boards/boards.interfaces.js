"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
class Board {
    constructor({ title, columns, id }) {
        this.id = id || (0, uuid_1.v4)();
        this.title = title;
        this.columns = columns;
    }
    toResponse() {
        return {
            id: this.id,
            title: this.title,
            columns: [...this.columns].map((item) => {
                const id = (0, uuid_1.v4)();
                return Object.assign(Object.assign({}, item), { id });
            }),
        };
    }
}
exports.Board = Board;
//# sourceMappingURL=boards.interfaces.js.map