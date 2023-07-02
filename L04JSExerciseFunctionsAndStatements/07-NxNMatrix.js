function printSquareMatrix(length) {

    let array = [];

    for (let i = 1; i <= length; i++) {
        array.push(length);
    }

    for (let j = 1; j <= length; j++) {
        console.log(array.join(" "));
    }

}

// printSquareMatrix(3);
printSquareMatrix(7);