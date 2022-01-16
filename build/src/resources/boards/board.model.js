
const __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");

const Board = (function () {
    function Board(_a) {
        const {title} = _a; const {columns} = _a; const {id} = _a;
        this.id = id || (0, uuid_1.v4)();
        this.title = title;
        this.columns = columns;
    }
    Board.prototype.toResponse = function () {
        return {
            id: this.id,
            title: this.title,
            columns: __spreadArray([], this.columns, true)
        };
    };
    return Board;
}());
exports.Board = Board;
// # sourceMappingURL=board.model.js.map