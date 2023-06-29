function oddAndEvenSum(num) {

    let oddSum = 0;
    let evenSum = 0;
    let stringNumber = num.toString();
    let length = stringNumber.length;

    for (let index = 0; index < length; index++) {
        // console.log(stringNumber[index]);
        let currentDigit = Number(stringNumber[index]);

        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }

    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);