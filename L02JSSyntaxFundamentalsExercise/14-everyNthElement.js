function printEveryNthElement(stringArray, step) {

    let resultArr = [];

    for (let index = 0; index < stringArray.length; index += step) {
        resultArr.push(stringArray[index]);
    }

    // console.log(resultArr);
    return resultArr;

}

printEveryNthElement(['5', '20', '31', '4', '20'], 2);