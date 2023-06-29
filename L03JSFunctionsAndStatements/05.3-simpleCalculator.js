const calculator = {
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
}

const simpleCalculator = (num1, num2, operator) => calculator[operator](num1, num2);


let result = simpleCalculator(5, 5, 'multiply');
console.log(result);
