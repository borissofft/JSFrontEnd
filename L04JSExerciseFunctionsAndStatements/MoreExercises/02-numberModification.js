function numberModification(number) {

    let numAsString = number.toString();

    function calculateAverage(numAsString) {
        return (
            numAsString
                .split("")
                .map(Number)
                .reduce((total, current) => total + current, 0) / numAsString.length
        );
    }

    let average = calculateAverage(numAsString);

    while (average < 5) {

        numAsString += "9";
        average = calculateAverage(numAsString);

    }

    console.log(numAsString);

}

numberModification(101);
numberModification(5835);