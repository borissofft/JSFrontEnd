function parkingLot(input) {

    const parking = new Set();

    input.forEach((entry) => {
        const [command, number] = entry.split(", ");

        if (command === "IN") {
            parking.add(number);
        } else if (command === "OUT") {
            parking.delete(number)
        }
    });

    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
        return;
    }

    const carNumbers = Array.from(parking).sort();

    carNumbers.forEach((carNumber) => console.log(carNumber));

}

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