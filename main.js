"use strict";
exports.__esModule = true;
var ProductManager_1 = require("./ProductManager");
var Product_1 = require("./Product");
var product1 = new Product_1.Product(1, 'iphone12', 'dien thoai', 12000000, 5, '27/5/2022', 'nghe goi truy cap interet');
var product2 = new Product_1.Product(2, 'samsung note 8', 'dien thoai', 1000000, 8, '15/5/2022', 'nghe goi truy cap interet');
var product3 = new Product_1.Product(3, 'xiaomi note 12', 'dien thoai', 11000000, 9, '18/5/2022', 'nghe goi truy cap interet');
var product4 = new Product_1.Product(4, 'tu lanh lg 12', 'tu lanh', 7000000, 4, '1/5/2022', 'giu thuc an tuoi');
var product5 = new Product_1.Product(5, 'may giat LG g123', 'May giat', 8000000, 3, '1/4/2022', 'giat quan ao');
var productManager = new ProductManager_1.ProductManager();
productManager.add(product1);
productManager.add(product2);
productManager.add(product3);
productManager.add(product4);
productManager.add(product5);
console.table(productManager.showList());
// update
productManager.update(3, 'xiaomi m1', 'dien thoai', 20000000, 4, '23/2/2021', 'dien thoai cam tay');
console.table(productManager.showList());
// search
console.table(productManager.search(4));
// Xoa
productManager["delete"](2);
console.table(productManager.showList());
