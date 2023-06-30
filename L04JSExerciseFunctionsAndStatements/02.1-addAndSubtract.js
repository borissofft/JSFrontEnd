function addAndSubtract(num1, num2, num3) {

    function sum() {
        return num1 + num2;
    }

    let sumOfItems = sum();

    function subtract() {
        return sumOfItems - num3;
    }

    let result = subtract();

    return result;
    // console.log(result);
}

addAndSubtract(23, 6, 10);