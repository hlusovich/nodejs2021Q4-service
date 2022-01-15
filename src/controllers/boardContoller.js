"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsModelController = void 0;
var board_js_1 = require("../entity/board.js");
var board_model_1 = require("../resources/boards/board.model");
var columns_1 = require("../entity/columns");
var columnController_1 = require("./columnController");
var BoardsModelController = (function () {
    function BoardsModelController() {
    }
    BoardsModelController.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var boards, _i, boards_1, item, columnsIndex, column;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, board_js_1.BoardModel.query('SELECT * FROM boards')];
                    case 1:
                        boards = _a.sent();
                        _i = 0, boards_1 = boards;
                        _a.label = 2;
                    case 2:
                        if (!(_i < boards_1.length)) return [3, 7];
                        item = boards_1[_i];
                        columnsIndex = 0;
                        _a.label = 3;
                    case 3:
                        if (!(columnsIndex < item.columns.length)) return [3, 6];
                        return [4, columnController_1.ColumnModelController.getColumn(item.columns[columnsIndex] + '')];
                    case 4:
                        column = _a.sent();
                        item.columns[columnsIndex] = column;
                        _a.label = 5;
                    case 5:
                        columnsIndex++;
                        return [3, 3];
                    case 6:
                        _i++;
                        return [3, 2];
                    case 7: return [2, boards];
                }
            });
        });
    };
    BoardsModelController.getBoardById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, board_js_1.BoardModel.findOne(id)];
                    case 1:
                        user = _a.sent();
                        return [2, user];
                }
            });
        });
    };
    BoardsModelController.createBoard = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var boardInstance, columns, board;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        boardInstance = new board_model_1.Board(data);
                        columns = data.columns.map(function (item) { return +item.id; });
                        return [4, board_js_1.BoardModel.create({ id: boardInstance.id, title: boardInstance.title, columns: columns })];
                    case 1:
                        board = _a.sent();
                        data.columns.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, columnController_1.ColumnModelController.createColumn(item)];
                                    case 1:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); });
                        return [4, board.save()];
                    case 2:
                        _a.sent();
                        return [2, board];
                }
            });
        });
    };
    ;
    BoardsModelController.updateBoard = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var columns;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        columns = data.columns.map(function (item) { return +item.id; });
                        data.columns.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var column;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, columns_1.ColumnsModel.create(item)];
                                    case 1:
                                        column = _a.sent();
                                        return [4, column.save()];
                                    case 2:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); });
                        return [4, board_js_1.BoardModel.update(id, { id: id, title: data.title, columns: columns })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ;
    BoardsModelController.deleteBoard = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, board_js_1.BoardModel.delete(id)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ;
    return BoardsModelController;
}());
exports.BoardsModelController = BoardsModelController;
