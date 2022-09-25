"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(account, password) {
        this.account = account;
        this.password = password;
    }
    User.prototype.setAccount = function (account) {
        this.account = account;
    };
    User.prototype.getAccount = function () {
        return this.account;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    return User;
}());
exports.User = User;
