function addAndSubtract(num1, num2, num3) {

    function sum() {
        return Number(num1) + Number(num2);
    }

    let sumOfItems = sum();

    function subtract() {
        return sumOfItems - Number(num3);
    }

    let result = subtract();

    return result;
    // console.log(result);
}

addAndSubtract(23, 6, 10);