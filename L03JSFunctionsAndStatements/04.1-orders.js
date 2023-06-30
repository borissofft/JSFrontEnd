function orderPrice(product, quantity) {

    let price = 0;

    switch (product) {
        case ("coffee"):
            price = 1.50;
            break;
        case ("water"):
            price = 1.00;
            break;
        case ("coke"):
            price = 1.40;
            break;
        case ("snacks"):
            price = 2.00;
            break;
    }

    let totalPrice = (price * quantity).toFixed(2);
    console.log(totalPrice);

}

orderPrice("water", 5);
orderPrice("coffee", 2);