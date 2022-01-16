
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_js_1 = require("./user.model.js");
const _404error_js_1 = require("../../../Errors/404error.js");

const UserController = (function () {
    function UserController(users) {
        if (users === void 0) { users = []; }
        this.users = users;
    }
    UserController.prototype.getAll = function () {
        return this.users.map((item) => user_model_js_1.User.toResponse(item));
    };
    UserController.prototype.getUser = function (id) {
        const user = this.users.find((item) => item.id === id);
        if (user) {
            return user_model_js_1.User.toResponse(user);
        }
        throw new _404error_js_1.Error404('User not found');
    };
    UserController.prototype.createUser = function (payload) {
        const user = new user_model_js_1.User(payload);
        this.users.push(user);
        return user;
    };
    UserController.prototype.updateUser = function (id, payload) {
        this.getUser(id);
        let user = null;
        this.users = this.users.map((item) => {
            if (item.id === id) {
                user = new user_model_js_1.User({...item, ...payload});
                return user;
            }
            return item;
        });
        if (user) {
            return user_model_js_1.User.toResponse(user);
        }
        throw new _404error_js_1.Error404('User not found');
    };
    UserController.prototype.deleteUser = function (id) {
        this.getUser(id);
        this.users = this.users.filter((item) => item.id !== id);
        return "User with ".concat(id, " was successfully  deleted");
    };
    return UserController;
}());
exports.default = new UserController();
// # sourceMappingURL=user.memory.repository.js.map