// Variant 1 - don't work with negative numbers

function largestNumber(...array) {

    let maxNum = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }

    console.log(`The largest number is ${maxNum}.`);

}

// largestNumber(4, 5, 9, 70, 30);
largestNumber(-3, -5, -22.5);

// Variant 2

function maxNumber(num1, num2, num3) {

    let result;

    if (num1 > num2 && num1 > num3) {
        result = num1;
    } else if (num2 > num1 && num2 > num3) {
        result = num2;
    } else {
        result = num3
    }

    console.log(`The largest number is ${result}.`);

}

maxNumber(-3, -5, -22.5);