
const __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError(`Class extends value ${  String(b)  } is not a constructor or null`);
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error404 = void 0;
const Error404 = (function (_super) {
    __extends(Error404, _super);
    function Error404(message) {
        const _this = _super.call(this) || this;
        _this.message = message;
        return _this;
    }
    return Error404;
}(Error));
exports.Error404 = Error404;
// # sourceMappingURL=404error.js.map