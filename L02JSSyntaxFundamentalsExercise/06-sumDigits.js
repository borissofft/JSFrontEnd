function sumDigits(number) {

    const digitsString = number.toString();
    let sum = 0;

    // for (let index = 0; index < digitsString.length; index++) {
    //     sum += Number(digitsString[index]);        
    // }

    for (const digit of digitsString) {
        sum += Number(digit);
    }

    console.log(sum);

}

sumDigits(245678);