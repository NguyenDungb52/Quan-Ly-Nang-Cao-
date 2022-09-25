"use strict";
exports.__esModule = true;
var manageProduct_1 = require("./../service/manageProduct");
var manageUser_1 = require("./../service/manageUser");
var user_1 = require("../model/user");
var input = require("readline-sync");
var listUser = new manageUser_1.ManageUser();
var listProduct = new manageProduct_1.ManageProduct();
function menu() {
    var menu = "-------Menu-------\n                1. Dang nhap\n                2. Dang ky  ";
    console.log(menu);
    var choice;
    do {
        choice = +input.question("nhap lua chon cua ban : ");
        switch (choice) {
            case 1:
                var t = signin();
                if (t == "tai khoan khong ton tai") {
                    signin();
                }
                else {
                    shoppingMenu(t);
                }
                break;
            case 2:
                signup();
                break;
        }
    } while (choice != 0);
}
function signin() {
    var account = input.question("nhap tai khoan :");
    var password = input.question("nhap mat khau :");
    var signIn = new user_1.User(account, password);
    return listUser.signIn(signIn);
}
function signup() {
    var account = input.question("nhap tai khoan :");
    var password = input.question("nhap mat khau :");
    var signup = new user_1.User(account, password);
    listUser.signUp(signup);
}
function shoppingMenu(t) {
    console.log(t.getAccount(), 'gvdsghdh');
    // if (t.getAccount() == "admin") {
    // }
    // let ShoppingMenu = `------  ShoppingMenu -------
    //                     1. Mua sam
    //                     2. Gio hang cua toi
    //                     3. Lich su
    //                     0. Thoat`
    //                     console.log(ShoppingMenu)
    //     let choice : number
    //     do {
    //         choice = +input.question('nhap lua chon cua ban : ')
    //             switch(choice) {
    //                 case 1 :
    //                     ShowProductList()
    //                     break
    //             }
    //     } while (choice >= 0);
}
function ShowProductList() {
    listProduct.showAllProduct();
}
function main() {
    menu();
}
main();
