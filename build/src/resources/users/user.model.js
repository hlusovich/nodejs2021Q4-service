
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");

const User = (function () {
    function User(_a) {
        const {name} = _a; const {login} = _a; const {password} = _a; const {id} = _a;
        this.id = id || (0, uuid_1.v4)();
        this.name = name;
        this.login = login;
        this.password = password;
    }
    User.toResponse = function (user) {
        const {id} = user; const {name} = user; const {login} = user;
        return { id, name, login };
    };
    return User;
}());
exports.User = User;
// # sourceMappingURL=user.model.js.map