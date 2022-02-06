"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseColumns = void 0;
function parseColumns(board) {
    const columns = board.columns.map((item) => JSON.parse(item));
    const parsedBoard = Object.assign(Object.assign({}, board), { columns });
    return parsedBoard;
}
exports.parseColumns = parseColumns;
//# sourceMappingURL=columnParser.js.map