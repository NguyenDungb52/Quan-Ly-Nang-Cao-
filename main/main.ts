import { Product } from "./../model/product";
import { ManageProduct } from "./../service/manageProduct";
import { ManageUser } from "./../service/manageUser";
import { User } from "../model/user";

let input = require("readline-sync");
let listUser: ManageUser = new ManageUser();
let listProduct: ManageProduct = new ManageProduct();
function menu() {
  let menu = `-------Menu-------
                1. Dang nhap
                2. Dang ky  `;
  console.log(menu);
  let choice: number;
  do {
    choice = +input.question("nhap lua chon cua ban : ");
    switch (choice) {
      case 1:
        let t: any = signin();
        if (t == "tai khoan khong ton tai") {
          signin();
        } else {
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
  let account = input.question("nhap tai khoan :");
  let password = input.question("nhap mat khau :");
  let signIn = new User(account, password,true ||false);
  return listUser.signIn(signIn);
}
function signup() {
  let account = input.question("nhap tai khoan :");
  let password = input.question("nhap mat khau :");
  let signup = new User(account, password,true);
  listUser.signUp(signup);
}
function adminMenuProduct(t:User) {
  let menu = `1. THem san pham
                  2. Sua san pham
                  3. Xoa san pham
                  4. Hien thi danh sach`;
  console.log(menu);
  let choice: number;
  do {
    choice = input.question("nhap lua chon cua ban");
    switch (choice) {
      case 1:
        addProduct();
        break;
      case 2:
        editProduct();
        break;
      case 3:
        removeProduct();
        break;
      case 4:
        ShowProductList();
        break;
    }
  } while (choice >= 0);
}
function addProduct() {
  let name = input.question("nhap ten san pham : ");
  let quantily = +input.question("nhap so luong san pham");
  let price = input.question("nhap gia tien : ") + "VND";
  let product = new Product(name, quantily, price);
  listProduct.add(product);
}
function editProduct() {
  let name = input.question("nhap tem san pham can sua");
  listProduct.edit(name);
}
function removeProduct() {
  let name = input.question("nhap tem san pham can xoa");
  listProduct.remove(name);
}
function ShowProductList() {
  listProduct.showAllProduct();
}
function adminMenuUser(t:User){
    let  menu = `1. Show List User
                 2. Lock User
                 3. Unlock User
                 0. Thoat`
                 console.log(menu)
            let choice : number
        do {
          choice = +input.question('nhap lua chon cua ban ')
            switch(choice){
              case 1 : 
                  showListUser()
                  break
              case 2 : 
                  LockUser()
                  break
              case 3 : 
                  UnLockUser()
                  break
              case 4 : 
              shoppingMenu(t)
              break 

            } 
        } while (choice >= 0);     
}
  function showListUser(){
        listUser.showUser()
  }
  function  LockUser(){
        let account = input.question('nhap tai khoang can khoa : ')
        listUser.lockUser(account)
  }

  function UnLockUser(){
    let account = input.question('nhap tai khoang can mo khoa : ')
    listUser.unLockUser(account)
  }

function shoppingMenu(t: User) {
  if (t.getAccount() == "admin") {
    let adminMenu = `
      1. Manage Product
      2. Manage User
    `;
    console.log(adminMenu);
    let choice: number;
    do {
      choice = +input.question("nhap lua chon cua ban :");
      switch (choice) {
        case 1:
          adminMenuProduct(t);
          break;
        case 2 : 
        adminMenuUser(t) 
        break 
      }
    } while (choice != 0);
  } else {
    let ShoppingMenu = `------  ShoppingMenu -------
                      1. Mua sam
                      2. Gio hang cua toi
                      3. Lich su
                      0. Thoat`;
    console.log(ShoppingMenu);
    let choice: number;
    do {
      choice = +input.question("nhap lua chon cua ban : ");
      switch (choice) {
        case 1:
          ShowProductList();
          break;
      }
    } while (choice >= 0);
  }
}

function main() {
  menu();
}
main();
