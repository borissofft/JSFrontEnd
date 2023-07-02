function isPerfectNumber(number) {

    let sum = 0;

    for (let index = 1; index < number; index++) {
        if (number % index === 0) {
            sum += index;
        }
    }

    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

}

isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(1236498);