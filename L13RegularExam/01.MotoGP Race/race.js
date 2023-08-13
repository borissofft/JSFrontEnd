function solve(input) {

    const n = Number(input.shift());
    const ridersInfo = input.splice(0, n);

    const riders = ridersInfo.reduce((acc, curr) => {
        const [rider, fuelCapacity, position] = curr.split("|");

        acc[rider] = ({ fuelCapacity, position });

        return acc;
    }, {});

    // console.log(JSON.stringify(riders, 0, 2));

    let line = input.shift();
    while (line !== "Finish") {
        const [command, ...rest] = line.split(" - ");

        switch (command) {
            case "StopForFuel": {
                const [rider, minimumFuel, changedPosition] = rest;
                const currRider = riders[rider];
                const riderFuel = currRider.fuelCapacity;

                if (Number(riderFuel) < Number(minimumFuel)) {
                    riders[rider].position = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
            }
            case "Overtaking": {
                const [firstRider, secondRider] = rest;

                const rider1 = riders[firstRider];
                const firstRiderPosition = Number(rider1.position);

                const rider2 = riders[secondRider];
                const secondRiderPosition = Number(rider2.position);

                if (firstRiderPosition < secondRiderPosition) {

                    [riders[firstRider].position, riders[secondRider].position] = [riders[secondRider].position, riders[firstRider].position];
                    console.log(`${firstRider} overtook ${secondRider}!`);
                }
                break;
            }
            case "EngineFail": {
                const [rider, lapsLeft] = rest;

                delete riders[rider];
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
            }
        }

        line = input.shift();

    }

    Object.entries(riders).forEach(([key, value]) => {
        console.log(`${key}\n  Final position: ${value.position}`);
    });
}


// solve([
//     "3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"
// ]);

solve([
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
]);
