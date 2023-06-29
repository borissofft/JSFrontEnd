
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;
let add = (x, y) => x + y;
let subtract = (x, y) => x - y;

function simpleCalculator(num1, num2, operator) {

    switch (operator) {
        case ("multiply"):
            return multiply(num1, num2);
        case ("divide"):
            return divide(num1, num2);
        case ("add"):
            return add(num1, num2);
        case ("subtract"):
            return subtract(num1, num2);
    }

}

let result = simpleCalculator(5, 5, 'multiply');
console.log(result);
