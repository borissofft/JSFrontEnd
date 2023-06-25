function calculateFruitPrice(fruitType, grams, pricePerKg) {

    let kilograms = (grams / 1000).toFixed(2);
    let money = (kilograms * pricePerKg).toFixed(2);

    console.log(`I need $${money} to buy ${kilograms} kilograms ${fruitType}.`);

}

calculateFruitPrice('orange', 2500, 1.80);
calculateFruitPrice('apple', 1563, 2.35);