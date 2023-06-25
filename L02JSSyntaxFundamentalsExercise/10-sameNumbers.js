function checkIfSameDigits(number) {

    // Variant 1
    // let digitsString = number.toString();

    // let areSame = true;
    // let digit = digitsString[0];
    // let sum = 0;

    // for (const char of digitsString) {

    //     sum += Number(char);

    //     if (digit !== char) {
    //         areSame = false;
    //     }
    // }

    // console.log(areSame);
    // console.log(sum);

    // Variant 2

    // const digits = Array.from(String(number), Number);
    const digits = number.toString().split("").map(Number);
    const isConsistent = new Set(digits).size === 1;
    const sum = digits.reduce(function (total, num) {
        return total + num;
    }, 0);

    console.log(isConsistent);
    console.log(sum);

}

checkIfSameDigits(2222222);
checkIfSameDigits(1234);