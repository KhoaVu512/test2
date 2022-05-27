"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
    }
    ProductManager.prototype.add = function (IProduct) {
        this.products.push(IProduct);
    };
    ProductManager.prototype.showList = function () {
        return this.products;
    };
    ProductManager.prototype["delete"] = function (id) {
        var indexOfDelete = this.findBook(id);
        if (indexOfDelete !== -1) {
            this.products.splice(indexOfDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    ProductManager.prototype.update = function (id, name, category, price, number, date, properties) {
        var indexOfUpdate = this.findBook(id);
        if (indexOfUpdate !== -1) {
            this.products[indexOfUpdate].setName(name);
            this.products[indexOfUpdate].setCategory(category);
            this.products[indexOfUpdate].setPrice(price);
            this.products[indexOfUpdate].setNumber(number);
            this.products[indexOfUpdate].setDate(date);
            this.products[indexOfUpdate].setProperties(properties);
        }
        else {
            throw new Error('update error');
        }
    };
    ProductManager.prototype.findBook = function (id) {
        var i = -1;
        this.products.forEach(function (product, index) {
            if (product.getId() === id) {
                i = index;
            }
        });
        return i;
    };
    ProductManager.prototype.search = function (id) {
        var indexOfSearch = this.findBook(id);
        for (var i = 0; i < this.products.length; i++) {
            if (indexOfSearch === this.products[i].getId()) {
            }
            return this.products[indexOfSearch];
        }
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
