"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var user_model_js_1 = require("./user.model.js");
var UserController = (function () {
    function UserController() {
    }
    UserController.createUser = function (payload) {
        var user = new user_model_js_1.User(payload);
        return user;
    };
    return UserController;
}());
exports.UserController = UserController;
