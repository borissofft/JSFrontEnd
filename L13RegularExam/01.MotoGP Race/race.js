function solve(input) {

    const n = Number(input.shift());
    const ridersInfo = input.splice(0, n);

    const riders = ridersInfo.reduce((acc, curr) => {
        const [rider, fuelCapacity, position] = curr.split("|");

        if (!acc.hasOwnProperty(rider)) {
            acc[rider] = [];
        }

        acc[rider].push({ rider, fuelCapacity, position });

        return acc;
    }, {});

    // console.log(JSON.stringify(riders, 0, 2));

    let line = input.shift();
    while (line !== "Finish") {
        const [command, ...rest] = line.split(" - ");

        switch (command) {
            case "StopForFuel": {
                const [rider, minimumFuel, changedPosition] = rest;
                const currRider = riders[rider].find(r => r.fuelCapacity);
                const riderFuel = currRider.fuelCapacity;

                if (Number(riderFuel) < Number(minimumFuel)) {
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
            }
            case "Overtaking": {
                const [firstRider, secondRider] = rest;
                const firstRiderPosition = riders.indexOf(firstRider);
                const secondRiderPosition = riders.indexOf(secondRider);
                if () {

                }
                break;
            }
            case "EngineFail": {
                const [] = rest;
                break;
            }
        }

        line = input.shift();

    }
}


solve([
    "3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
]);