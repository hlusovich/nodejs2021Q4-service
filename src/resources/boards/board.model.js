"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
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
var uuid_1 = require("uuid");
var Board = (function () {
    function Board(_a) {
        var title = _a.title, columns = _a.columns, id = _a.id;
        this.id = id || (0, uuid_1.v4)();
        this.title = title;
        this.columns = columns;
    }
    Board.prototype.toResponse = function () {
        return {
            id: this.id,
            title: this.title,
            columns: __spreadArray([], this.columns, true).map(function (item) {
                var id = (0, uuid_1.v4)();
                return __assign(__assign({}, item), { id: id });
            }),
        };
    };
    return Board;
}());
exports.Board = Board;
