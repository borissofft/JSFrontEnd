function factorialDivision(x, y) {

    let factorialX = 1;
    let factorialY = 1;

    for (let i = 1; i <= x; i++) {
        factorialX *= i;
    }

    for (let j = 1; j <= y; j++) {
        factorialY *= j;
    }

    let result = (factorialX / factorialY).toFixed(2);

    console.log(result);

}

factorialDivision(5, 2);
factorialDivision(6, 2);