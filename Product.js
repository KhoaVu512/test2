"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, category, price, number, date, properties) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.number = number;
        this.date = date;
        this.properties = properties;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setId = function (value) {
        this.id = value;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setName = function (value) {
        this.name = value;
    };
    Product.prototype.getCategory = function () {
        return this.category;
    };
    Product.prototype.setCategory = function (value) {
        this.category = value;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (value) {
        this.price = value;
    };
    Product.prototype.getNumber = function () {
        return this.number;
    };
    Product.prototype.setNumber = function (value) {
        this.number = value;
    };
    Product.prototype.getDate = function () {
        return this.date;
    };
    Product.prototype.setDate = function (value) {
        this.date = value;
    };
    Product.prototype.getProperties = function () {
        return this.properties;
    };
    Product.prototype.setProperties = function (value) {
        this.properties = value;
    };
    return Product;
}());
exports.Product = Product;
