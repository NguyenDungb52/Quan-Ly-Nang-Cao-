"use strict";
exports.__esModule = true;
exports.ManageUser = void 0;
var user_1 = require("../model/user");
var ManageUser = /** @class */ (function () {
    function ManageUser() {
        this.listUser = [];
        this.listUser.push(new user_1.User('admin', 'admin'));
    }
    ManageUser.prototype.signIn = function (t) {
        for (var i = 0; i < this.listUser.length; i++) {
            if (this.listUser[i].getAccount() == t.getAccount() && this.listUser[i].getPassword() == t.getPassword()) {
                return this.listUser[i];
            }
        }
        return 'tai khoan khong ton tai';
    };
    ManageUser.prototype.signUp = function (t) {
        this.listUser.push(t);
    };
    return ManageUser;
}());
exports.ManageUser = ManageUser;
