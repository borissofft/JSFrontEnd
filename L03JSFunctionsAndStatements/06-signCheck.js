function checkSignOfProduct(numOne, numTwo, numThree) {
    let countMinuses = 0;

    if (numOne < 0) {
        countMinuses++;
    }

    if (numTwo < 0) {
        countMinuses++;
    }

    if (numThree < 0) {
        countMinuses++;
    }

    if (countMinuses % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}

checkSignOfProduct(5, 12, 15);
checkSignOfProduct(5, 12, -15);
checkSignOfProduct(-6, -12, 14);
checkSignOfProduct(-1, -2, -3);
checkSignOfProduct(-5, 1, 1);