function simpleCalculator(num1, num2, operator) {

    switch (operator) {
        case ("multiply"):
            return num1 * num2;
        case ("divide"):
            return num1 / num2;
        case ("add"):
            return num1 + num2;
        case ("subtract"):
            return num1 - num2;
    }

}

let result = simpleCalculator(5, 5, 'multiply');
console.log(result);
