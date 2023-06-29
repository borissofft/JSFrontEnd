function findSmallestNumber(num1, num2, num3) {

    let minNumber = Number.MAX_SAFE_INTEGER;

    if(num1 < minNumber) {
        minNumber = num1;
    }

    if(num2 < minNumber) {
        minNumber = num2;
    }

    if(num3 < minNumber) {
        minNumber = num3;
    }
    
    console.log(minNumber);

}

findSmallestNumber(2, 5, 3);