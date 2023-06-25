function printAndSum(num1, num2) {

    let array = [];
    let sum = 0;

    for (let index = num1; index <= num2; index++) {
        array.push(index);
        sum += index;
    }

    console.log(array.join(" "));
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);