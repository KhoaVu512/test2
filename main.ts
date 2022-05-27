import {ProductManager} from "./ProductManager";
import {Product} from "./Product";

let product1 = new Product(1,'iphone12','dien thoai',12000000,5,'27/5/2022','nghe goi truy cap interet')
let product2 = new Product(2,'samsung note 8','dien thoai',1000000,8,'15/5/2022','nghe goi truy cap interet')
let product3 = new Product(3,'xiaomi note 12','dien thoai',11000000,9,'18/5/2022','nghe goi truy cap interet')
let product4 = new Product(4,'tu lanh lg 12','tu lanh',7000000,4,'1/5/2022','giu thuc an tuoi')
let product5 = new Product(5,'may giat LG g123','May giat',8000000,3,'1/4/2022','giat quan ao')

let productManager = new ProductManager()
productManager.add(product1)
productManager.add(product2)
productManager.add(product3)
productManager.add(product4)
productManager.add(product5)

console.table(productManager.showList())

productManager.update(3,'xiaomi m1','dien thoai',20000000,4,'23/2/2021','dien thoai cam tay')
console.table(productManager.showList())

productManager.delete(2)
console.table(productManager.showList())

console.table(productManager.search(3))

