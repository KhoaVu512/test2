import {Product} from "./Product";

export class ProductManager {
    products:Product[] = []
    constructor() {
    }
    add(IProduct:Product):void {
        this.products.push(IProduct)
    }
    showList():Product[] {
        return this.products
    }
    delete(id:number) {
        let indexOfDelete = this.findBook(id);
            if (indexOfDelete !== -1) {
                this.products.splice(indexOfDelete,1)
            } else {
                throw new Error('delete error')
            }


    }
    update(id:number,
           name: string,
           category: string,
           price: number,
           number: number,
           date: string,
           properties: string) {
        let indexOfUpdate = this.findBook(id);
        if (indexOfUpdate !== -1) {
            this.products[indexOfUpdate].setName(name);
            this.products[indexOfUpdate].setCategory(category);
            this.products[indexOfUpdate].setPrice(price);
            this.products[indexOfUpdate].setNumber(number);
            this.products[indexOfUpdate].setDate(date);
            this.products[indexOfUpdate].setProperties(properties);
        } else {
            throw new Error('update error')
        }
    }
    findBook(id: number) {
        let i = -1;
        this.products.forEach((product,  index) => {
            if (product.getId() === id) {
                i = index;
            }
        })
        return i;
    }
    search(id:number) {
        let indexOfSearch = this.findBook(id);
        for (let i = 0;i < this.products.length;i++) {
            if (indexOfSearch === this.products[i].getId())  {
            }
            return this.products[indexOfSearch]
        }

    }
}