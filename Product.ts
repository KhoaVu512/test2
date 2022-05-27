export class Product {
    private id:number
    private name:string;
    private category:string;
    private price:number;
    private number:number;
    private date:string;
    private properties:string;


    constructor(id:number,
                name: string,
                category: string,
                price: number,
                number: number,
                date: string,
                properties: string) {
        this.id = id
        this.name = name;
        this.category = category;
        this.price = price;
        this.number = number;
        this.date = date;
        this.properties = properties;
    }


    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getCategory(): string {
        return this.category;
    }

    setCategory(value: string) {
        this.category = value;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }

    getNumber(): number {
        return this.number;
    }

    setNumber(value: number) {
        this.number = value;
    }

    getDate(): string {
        return this.date;
    }

    setDate(value: string) {
        this.date = value;
    }

    getProperties(): string {
        return this.properties;
    }

    setProperties(value: string) {
        this.properties = value;
    }
}