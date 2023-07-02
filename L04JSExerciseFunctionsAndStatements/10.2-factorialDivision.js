function factorialDivision(x, y) {

    function calculateFactorial(num) {

        let factorial = 1;
        for (let index = 1; index <= num; index++) {
            factorial *= index;
        }

        return factorial;
    }

    let factorialX = calculateFactorial(x);
    let factorialY = calculateFactorial(y);

    let result = (factorialX / factorialY).toFixed(2);

    console.log(result);

}

factorialDivision(5, 2);
// factorialDivision(6, 2);