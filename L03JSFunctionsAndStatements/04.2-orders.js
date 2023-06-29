let price = {
    "coffee": 1.50,
    "water": 1.00,
    "coke": 1.40,
    "snacks": 2.00
}

function orderPrice(product, quantity) {

    let totalPrice = (price[product] * quantity).toFixed(2);
    console.log(totalPrice);

}

orderPrice("water", 5);
orderPrice("coffee", 2);