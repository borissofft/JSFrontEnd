// PROTOTYPE was used when in JS there was no Classes

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.setDiscount = function (rate) {
    this.price -= this.price * rate;
};

const product = new Product("test", 100);

// CLASS

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setDiscount(rate) {
        this.price -= this.price * rate;
    }
}