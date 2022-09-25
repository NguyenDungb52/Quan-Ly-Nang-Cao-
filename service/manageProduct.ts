import { Product } from './../model/product';
let input = require("readline-sync")
export class ManageProduct {
  listProduct : Product [] = []
  constructor() {
        this.listProduct.push (new Product ('My Tom Hao Hao', 100, '5000 VND')) 
        this.listProduct.push (new Product ('My Tom Omachi', 100, '8000 VND')) 
        this.listProduct.push (new Product ('My Tron', 100, '10000 VND')) 
  }

  showAllProduct(){
    console.log(this.listProduct)
  }
  add(t:Product){
    this.listProduct.push(t)
    console.log(this.listProduct)
  }
  edit(t : string){

    let nameNew = input.question('nhap ten san pham moi : ')
    let quantilyNew = +input.question('nhap so luong san pham moi: ')
    let priceNew = input.question('nhap so tien cua san pham moi') + 'VND'
    let newProduct = new Product(nameNew,quantilyNew,priceNew)
    for(let i = 0; i< this.listProduct.length;i++){
      if(this.listProduct[i].name == t){
        this.listProduct[i] = newProduct
      }
    }

    console.log(this.listProduct)
  }
  remove(t :string){
    for(let i = 0; i< this.listProduct.length;i++){
      if(this.listProduct[i].name == t){
        this.listProduct.slice(i,1)
      }
    }
    console.log(this.listProduct)
  }
}