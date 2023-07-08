function parkingLot(input) {

    const parking = [];

    input.forEach((entry) => {
        const [command, number] = entry.split(", ");

        if (command === "IN" && !parking.includes(number)) {
            parking.push(number);
        } else if (command === "OUT") {
            const index = parking.indexOf(number);
            // 1. use splice
            parking.splice(index, 1);
        }
    });

    if (parking.length === 0) {
        console.log("Parking Lot is Empty");
        return;
    }

    parking.sort().forEach((carNumber) => console.log(carNumber))

}

// Gets only 40/100 points!

parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);