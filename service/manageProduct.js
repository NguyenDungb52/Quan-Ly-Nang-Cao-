"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var product_1 = require("./../model/product");
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
        this.listProduct.push(new product_1.Product('My Tom Hao Hao', 100, '5000 VND'));
        this.listProduct.push(new product_1.Product('My Tom Omachi', 100, '8000 VND'));
        this.listProduct.push(new product_1.Product('My Tron', 100, '10000 VND'));
    }
    ManageProduct.prototype.showAllProduct = function () {
        return this.listProduct;
    };
    ManageProduct.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
