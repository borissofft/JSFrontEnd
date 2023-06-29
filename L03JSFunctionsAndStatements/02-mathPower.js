function mathPower(number, power) {
    let result = 1;
    for (let index = 1; index <= power; index++) {
        result *= number;
    }

    console.log(result);

}

mathPower(3, 3);