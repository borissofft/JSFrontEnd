function sum(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function addAndSubtract(num1, num2, num3) {

    return subtract(sum(num1, num2), num3);
    
}

console.log(addAndSubtract(23, 6, 10));